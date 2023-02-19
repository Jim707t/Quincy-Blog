declare module 'glob';
declare module 'markdown-it' {
  interface MarkdownItOptions {
    html?: boolean;
    xhtmlOut?: boolean;
    breaks?: boolean;
    langPrefix?: string;
    linkify?: boolean;
    typographer?: boolean;
    quotes?: string;
  }

  type TokenRender = (tokens: any, idx: number, options: any, env: any, slf: any) => string;

  interface MarkdownIt {
    new (options?: MarkdownItOptions): MarkdownIt;
    render(md: string): string;
    use<T extends any[]>(plugin: (md: MarkdownIt, ...params: T) => void, ...params: T): MarkdownIt;
    disable(rules: string | string[], ignoreInvalid?: boolean): MarkdownIt;
    enable(rules: string | string[], ignoreInvalid?: boolean): MarkdownIt;
    set(options: MarkdownItOptions): MarkdownIt;
    normalizeLink(url: string): string;
    normalizeLinkText(url: string): string;
    validateLink(url: string): boolean;
    linkify: any;
    utils: {
      assign(obj: any, ...args: any[]): any;
      isString(obj: any): boolean;
      has(obj: any, key: string): boolean;
      unescapeMd(str: string): string;
      unescapeAll(str: string): string;
      isValidEntityCode(code: number): boolean;
      fromCodePoint(c: number): string;
      escapeHtml(str: string): string;
      arrayReplaceAt(src: any[], pos: number, newElements: any[]): any[];
      isSpace(str: string): boolean;
    };
    helpers: {
      parseLinkLabel(state: any, start: number, disableNested?: boolean): number;
      parseLinkDestination(str: string, pos: number, max: number): number;
      parseLinkTitle(str: string, pos: number, max: number): number;
    };
    ruler: any;
    renderer: {
      rules: {
        [key: string]: TokenRender;
      };
      render(tokens: any, options: any, env: any): string;
    };
    Token: any;
    tokens: any;
  }

  const markdownIt: MarkdownIt;

  export = markdownIt;
}
