<script>
import Prism from "prismjs";

export default {
  snippet: "Snippet",
  props: {
    error: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: String
    },
    language: {
      required: true,
      validator: function(value) {
        return ["graphql", "json"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    code() {
      return this.data
        ? Prism.highlight(
            this.data,
            Prism.languages[this.language],
            this.language
          )
        : null;
    }
  }
};
</script>

<template>
  <div :class="['snippet', { error: error, loading: loading }]">
    <template v-if="loading">Loading...</template>
    <template v-else-if="error">An error occured</template>
    <template v-else-if="data">
      <div v-html="code"></div>
    </template>
    <template v-else>No result :(</template>
  </div>
</template>

<style scoped>
.snippet {
  box-sizing: border-box;
  overflow: auto;
  height: 400px;
  padding: 12px;
  font-family: Inconsolata, monospace;
  font-size: 18px;
  line-height: 25px;
  white-space: pre;
  background: #2f1c3e;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.3);
}

.error {
  color: #ff6e7f;
}

@media (max-width: 999px) {
  .snippet {
    height: 250px;
  }
}
</style>

<style>
/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #ccc;
  background: none;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color: #ff6e7f;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
  color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: #ffd795;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: #ca2bc2;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
  color: #b8e986;
}

.token.operator,
.token.entity,
.token.url {
  color: #67cdcc;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
</style>
