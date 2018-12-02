import { helper } from '@ember/component/helper';
import marked from 'marked';
import { htmlSafe } from '@ember/template';

export function formatMarkdown(params/*, hash*/) {
  let value = params[0];
  return htmlSafe(marked(value));
}

export default helper(formatMarkdown);