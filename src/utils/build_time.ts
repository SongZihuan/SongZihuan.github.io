import build_time from "@/utils/build_time.json"

export const get_build_time = (): Date => {
    return build_time.compile_time ? new Date(build_time.compile_time) : new Date()
}