// vite.config.ts
import { loadEnv } from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/vite@4.3.0_@types+node@18.15.12_sass@1.62.0_terser@5.17.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/@vitejs+plugin-vue@4.1.0_vite@4.3.0_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import fs from "fs";
import eslintPlugin from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.38.0_vite@4.3.0/node_modules/vite-plugin-eslint/dist/index.mjs";
import AutoImport from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/unplugin-auto-import@0.15.3_@vueuse+core@10.1.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs";
import { VantResolver } from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { viteMockServe } from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/vite-plugin-mock@2.9.8_mockjs@1.1.0_vite@4.3.0/node_modules/vite-plugin-mock/dist/index.js";
import svgLoader from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/vite-svg-loader@4.0.0/node_modules/vite-svg-loader/index.js";
import { visualizer } from "file:///C:/Users/songz/Documents/WebProject/github-page/node_modules/.pnpm/rollup-plugin-visualizer@5.9.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_dirname = "C:\\Users\\songz\\Documents\\WebProject\\github-page";
fs.writeFile("./src/utils/build_time.json", JSON.stringify({
  "compile_time": (/* @__PURE__ */ new Date()).getTime()
}), () => {
});
var CWD = process.cwd();
var vite_config_default = ({ mode }) => {
  const { VITE_PROXY_TARGET, VITE_HASH, VITE_VISUALIZE, VITE_ASSETS_BASE } = loadEnv(mode, CWD);
  let output = {
    manualChunks: {
      vue: ["vue", "vue-router", "pinia", "@vueuse/core"]
    }
  };
  if (VITE_HASH === "false") {
    const names = {
      entryFileNames: `assets/[name].js`,
      chunkFileNames: `assets/[name].js`,
      assetFileNames: `assets/[name].[ext]`
    };
    output = { ...output, ...names };
  }
  let visualizerPlugin = {};
  if (VITE_VISUALIZE === "true") {
    visualizerPlugin = visualizer({
      open: true,
      //注意这里要设置为true，否则无效
      gzipSize: true,
      brotliSize: true
    });
  }
  return {
    plugins: [
      vue(),
      eslintPlugin(),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"],
        // 自动导入vue和vue-router相关函数
        dts: "./auto-import.d.ts",
        // 生成 `auto-import.d.ts` 全局声明
        // 使用自动导入插件，需要在配置相应的eslint，否则eslint以为你没有导入，会报错
        eslintrc: {
          // true启用。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把enable关掉，即改成false。否则这个文件每次会在重新加载的时候重新生成，这会导致eslint有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
          enabled: false,
          // 默认false
          filepath: "./.eslintrc-auto-import.json",
          // 生成json文件,可以不配置该项，默认就是将生成在根目录
          globalsPropValue: true
        }
      }),
      Components({
        resolvers: [VantResolver()]
        // dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import，默认为src/components
      }),
      {
        ...viteMockServe(),
        apply: "serve"
      },
      svgLoader(),
      visualizerPlugin
    ],
    base: VITE_ASSETS_BASE || "/",
    // 设置打包路径
    server: {
      host: "0.0.0.0",
      proxy: {
        "^/(api|tools)": {
          target: VITE_PROXY_TARGET,
          changeOrigin: true,
          secure: false
        }
      }
    },
    resolve: {
      alias: [
        // 配置 @ 指代 src
        {
          find: "@",
          replacement: resolve(__vite_injected_original_dirname, "./src")
        }
      ]
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 定义全局的scss变量
          // 给导入的路径最后加上 ;
          additionalData: '@import "@/assets/styles/mixin/index.scss";'
        }
      }
    },
    build: {
      outDir: mode === "github" ? "docs" : `dist-${mode}`,
      // 压缩代码
      minify: "terser",
      // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
      // 合并小文件
      rollupOptions: {
        output
      },
      /** 在打包代码时移除 console.log、debugger 和 注释 */
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ["console.log"]
        },
        format: {
          /** 删除注释 */
          comments: false
        }
      },
      chunkSizeWarningLimit: 2e3
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzb25nelxcXFxEb2N1bWVudHNcXFxcV2ViUHJvamVjdFxcXFxnaXRodWItcGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcc29uZ3pcXFxcRG9jdW1lbnRzXFxcXFdlYlByb2plY3RcXFxcZ2l0aHViLXBhZ2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3Nvbmd6L0RvY3VtZW50cy9XZWJQcm9qZWN0L2dpdGh1Yi1wYWdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVXNlckNvbmZpZywgQ29uZmlnRW52LCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmZzLndyaXRlRmlsZShcIi4vc3JjL3V0aWxzL2J1aWxkX3RpbWUuanNvblwiLCBKU09OLnN0cmluZ2lmeSh7XG4gIFwiY29tcGlsZV90aW1lXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59KSwgKCkgPT4ge30pXG5cbi8vIHZpdGVcdTk4NzlcdTc2RUVcdThGRDBcdTg4NENcdTgxRUFcdTUyQThcdTY4QzBcdTY3RTVlc2xpbnRcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuXG4vLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVWdWVcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdTU0OENcdTdFQzRcdTRFRjZcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG4vLyBcdTYzMDlcdTk3MDBcdTVCRkNcdTUxNjVcdTdFQzRcdTRFRjZcdUZGMENcdTUzMDVcdTYyRUNcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcdTU0OENVSVx1NUU5Myx2YW50XHU3Njg0XHU1MUZEXHU2NTcwXHU5NzAwXHU4OTgxXHU2MjRCXHU1MkE4XHU1RjE1XHU1MTY1KFx1NTFGRFx1NjU3MCArIFx1NjgzN1x1NUYwRilcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBWYW50UmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5cbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xuXG5jb25zdCBDV0QgPSBwcm9jZXNzLmN3ZCgpXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICAvLyBcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcbiAgY29uc3QgeyBWSVRFX1BST1hZX1RBUkdFVCwgVklURV9IQVNILCBWSVRFX1ZJU1VBTElaRSwgVklURV9BU1NFVFNfQkFTRSB9ID0gbG9hZEVudihtb2RlLCBDV0QpXG5cbiAgLy8gXHU2RDRCXHU4QkQ1XHU3M0FGXHU1ODgzXHU0RTBEXHU1MkEwaGFzaFxuICBsZXQgb3V0cHV0ID0ge1xuICAgIG1hbnVhbENodW5rczoge1xuICAgICAgdnVlOiBbJ3Z1ZScsICd2dWUtcm91dGVyJywgJ3BpbmlhJywgJ0B2dWV1c2UvY29yZSddXG4gICAgfVxuICB9XG4gIGlmIChWSVRFX0hBU0ggPT09ICdmYWxzZScpIHtcbiAgICBjb25zdCBuYW1lcyA9IHtcbiAgICAgIGVudHJ5RmlsZU5hbWVzOiBgYXNzZXRzL1tuYW1lXS5qc2AsXG4gICAgICBjaHVua0ZpbGVOYW1lczogYGFzc2V0cy9bbmFtZV0uanNgLFxuICAgICAgYXNzZXRGaWxlTmFtZXM6IGBhc3NldHMvW25hbWVdLltleHRdYFxuICAgIH1cbiAgICBvdXRwdXQgPSB7IC4uLm91dHB1dCwgLi4ubmFtZXMgfVxuICB9XG5cbiAgLy8gXHU1M0VGXHU4OUM2XHU1MzE2XHU1MjA2XHU2NzkwXG4gIGxldCB2aXN1YWxpemVyUGx1Z2luID0ge31cbiAgaWYgKFZJVEVfVklTVUFMSVpFID09PSAndHJ1ZScpIHtcbiAgICB2aXN1YWxpemVyUGx1Z2luID0gdmlzdWFsaXplcih7XG4gICAgICBvcGVuOiB0cnVlLCAvL1x1NkNFOFx1NjEwRlx1OEZEOVx1OTFDQ1x1ODk4MVx1OEJCRVx1N0Y2RVx1NEUzQXRydWVcdUZGMENcdTU0MjZcdTUyMTlcdTY1RTBcdTY1NDhcbiAgICAgIGd6aXBTaXplOiB0cnVlLFxuICAgICAgYnJvdGxpU2l6ZTogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgZXNsaW50UGx1Z2luKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjV2dWVcdTU0OEN2dWUtcm91dGVyXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXG4gICAgICAgIGR0czogJy4vYXV0by1pbXBvcnQuZC50cycsIC8vIFx1NzUxRlx1NjIxMCBgYXV0by1pbXBvcnQuZC50c2AgXHU1MTY4XHU1QzQwXHU1OEYwXHU2NjBFXG4gICAgICAgIC8vIFx1NEY3Rlx1NzUyOFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NjNEMlx1NEVGNlx1RkYwQ1x1OTcwMFx1ODk4MVx1NTcyOFx1OTE0RFx1N0Y2RVx1NzZGOFx1NUU5NFx1NzY4NGVzbGludFx1RkYwQ1x1NTQyNlx1NTIxOWVzbGludFx1NEVFNVx1NEUzQVx1NEY2MFx1NkNBMVx1NjcwOVx1NUJGQ1x1NTE2NVx1RkYwQ1x1NEYxQVx1NjJBNVx1OTUxOVxuICAgICAgICBlc2xpbnRyYzoge1xuICAgICAgICAgIC8vIHRydWVcdTU0MkZcdTc1MjhcdTMwMDJcdTc1MUZcdTYyMTBcdTRFMDBcdTZCMjFcdTVDMzFcdTUzRUZcdTRFRTVcdUZGMENcdTkwN0ZcdTUxNERcdTZCQ0ZcdTZCMjFcdTVERTVcdTdBMEJcdTU0MkZcdTUyQThcdTkwRkRcdTc1MUZcdTYyMTBcdUZGMENcdTRFMDBcdTY1RTZcdTc1MUZcdTYyMTBcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjZcdTRFNEJcdTU0MEVcdUZGMENcdTY3MDBcdTU5N0RcdTYyOEFlbmFibGVcdTUxNzNcdTYzODlcdUZGMENcdTUzNzNcdTY1MzlcdTYyMTBmYWxzZVx1MzAwMlx1NTQyNlx1NTIxOVx1OEZEOVx1NEUyQVx1NjU4N1x1NEVGNlx1NkJDRlx1NkIyMVx1NEYxQVx1NTcyOFx1OTFDRFx1NjVCMFx1NTJBMFx1OEY3RFx1NzY4NFx1NjVGNlx1NTAxOVx1OTFDRFx1NjVCMFx1NzUxRlx1NjIxMFx1RkYwQ1x1OEZEOVx1NEYxQVx1NUJGQ1x1ODFGNGVzbGludFx1NjcwOVx1NjVGNlx1NEYxQVx1NjI3RVx1NEUwRFx1NTIzMFx1OEZEOVx1NEUyQVx1NjU4N1x1NEVGNlx1MzAwMlx1NUY1M1x1OTcwMFx1ODk4MVx1NjZGNFx1NjVCMFx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTE4RFx1OTFDRFx1NjVCMFx1NjI1M1x1NUYwMFxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLCAvLyBcdTlFRDhcdThCQTRmYWxzZVxuICAgICAgICAgIGZpbGVwYXRoOiAnLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbicsIC8vIFx1NzUxRlx1NjIxMGpzb25cdTY1ODdcdTRFRjYsXHU1M0VGXHU0RUU1XHU0RTBEXHU5MTREXHU3RjZFXHU4QkU1XHU5ODc5XHVGRjBDXHU5RUQ4XHU4QkE0XHU1QzMxXHU2NjJGXHU1QzA2XHU3NTFGXHU2MjEwXHU1NzI4XHU2ODM5XHU3NkVFXHU1RjU1XG4gICAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtWYW50UmVzb2x2ZXIoKV1cbiAgICAgICAgLy8gZGlyczogWydzcmMvY29tcG9uZW50cyddLCAvLyBcdTkxNERcdTdGNkVcdTk3MDBcdTg5ODFcdTlFRDhcdThCQTRcdTVCRkNcdTUxNjVcdTc2ODRcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMENcdThCRTVcdTY1ODdcdTRFRjZcdTU5MzlcdTRFMEJcdTc2ODRcdTYyNDBcdTY3MDlcdTdFQzRcdTRFRjZcdTkwRkRcdTRGMUFcdTgxRUFcdTUyQTggaW1wb3J0XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBc3JjL2NvbXBvbmVudHNcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAuLi52aXRlTW9ja1NlcnZlKCksXG4gICAgICAgIGFwcGx5OiAnc2VydmUnXG4gICAgICB9LFxuICAgICAgc3ZnTG9hZGVyKCksXG4gICAgICB2aXN1YWxpemVyUGx1Z2luXG4gICAgXSxcbiAgICBiYXNlOiBWSVRFX0FTU0VUU19CQVNFIHx8ICcvJywgLy8gXHU4QkJFXHU3RjZFXHU2MjUzXHU1MzA1XHU4REVGXHU1Rjg0XG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBwcm94eToge1xuICAgICAgICAnXi8oYXBpfHRvb2xzKSc6IHtcbiAgICAgICAgICB0YXJnZXQ6IFZJVEVfUFJPWFlfVEFSR0VULFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICBzZWN1cmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiBbXG4gICAgICAgIC8vIFx1OTE0RFx1N0Y2RSBAIFx1NjMwN1x1NEVFMyBzcmNcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6ICdAJyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgLy8gY3NzXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4XG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAvLyBcdTVCOUFcdTRFNDlcdTUxNjhcdTVDNDBcdTc2ODRzY3NzXHU1M0Q4XHU5MUNGXG4gICAgICAgICAgLy8gXHU3RUQ5XHU1QkZDXHU1MTY1XHU3Njg0XHU4REVGXHU1Rjg0XHU2NzAwXHU1NDBFXHU1MkEwXHU0RTBBIDtcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCJAL2Fzc2V0cy9zdHlsZXMvbWl4aW4vaW5kZXguc2Nzc1wiOydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogbW9kZSA9PT0gXCJnaXRodWJcIiA/IFwiZG9jc1wiIDogYGRpc3QtJHttb2RlfWAsXG4gICAgICAvLyBcdTUzOEJcdTdGMjlcdTRFRTNcdTc4MDFcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsIC8vICd0ZXJzZXInIFx1NzZGOFx1NUJGOVx1OEY4M1x1NjE2Mlx1RkYwQ1x1NEY0Nlx1NTkyN1x1NTkxQVx1NjU3MFx1NjBDNVx1NTFCNVx1NEUwQlx1Njc4NFx1NUVGQVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NEY1M1x1NzlFRlx1NjZGNFx1NUMwRlx1MzAwMidlc2J1aWxkJyBcdTY3MDBcdTVDMEZcdTUzMTZcdTZERjdcdTZEQzZcdTY2RjRcdTVGRUJcdTRGNDZcdTY3ODRcdTVFRkFcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTc2RjhcdTVCRjlcdTY2RjRcdTU5MjdcdTMwMDJcbiAgICAgIC8vIFx1NTQwOFx1NUU3Nlx1NUMwRlx1NjU4N1x1NEVGNlxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IG91dHB1dFxuICAgICAgfSxcbiAgICAgIC8qKiBcdTU3MjhcdTYyNTNcdTUzMDVcdTRFRTNcdTc4MDFcdTY1RjZcdTc5RkJcdTk2NjQgY29uc29sZS5sb2dcdTMwMDFkZWJ1Z2dlciBcdTU0OEMgXHU2Q0U4XHU5MUNBICovXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgICAgZHJvcF9jb25zb2xlOiBmYWxzZSxcbiAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnXVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAvKiogXHU1MjIwXHU5NjY0XHU2Q0U4XHU5MUNBICovXG4gICAgICAgICAgY29tbWVudHM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDBcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBZ0MsZUFBZTtBQUMxWCxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sUUFBUTtBQU9mLE9BQU8sa0JBQWtCO0FBR3pCLE9BQU8sZ0JBQWdCO0FBRXZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBRTdCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sZUFBZTtBQUN0QixTQUFTLGtCQUFrQjtBQXBCM0IsSUFBTSxtQ0FBbUM7QUFLekMsR0FBRyxVQUFVLCtCQUErQixLQUFLLFVBQVU7QUFBQSxFQUN6RCxpQkFBZ0Isb0JBQUksS0FBSyxHQUFFLFFBQVE7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
