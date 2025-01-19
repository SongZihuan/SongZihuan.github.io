<script setup lang="ts"></script>

<template>
  <h1>404</h1>
  <h2>Oops! The page you're looking for isn't here.</h2>
  <p>We can't seem to find the page you were trying to reach. This might be because of:</p>
  <ul>
    <li>An outdated link</li>
    <li>A mistyped address</li>
    <li>Or the page has been moved</li>
  </ul>
  <p>Try going back to the <a href="/">homepage</a> or contact us if the problem persists.</p>
</template>

<style scoped lang="scss">
  h1 {
    font-size: 7em;
    margin-bottom: 0.5em;
    color: #cc0000;
  }

  h2 {
    font-size: 2em;
    color: #666;
  }

  p {
    font-size: 1.2em;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
