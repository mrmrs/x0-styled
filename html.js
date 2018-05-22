module.exports = ({
  html,
  css,
  scripts,
  title,
  meta = [],
  links = [],
}) => `<!DOCTYPE html>
<head>
  <title>${title}</title>
  ${css}
</head>
<body>
  <div id=root>${html}</div>
  ${scripts}
</body>
`
