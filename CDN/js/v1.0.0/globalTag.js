/*show me all html tag on this way
const name=tagname().text("showing value").add("body")

example:
const  test_el_1=button().text("Test Button").add("body")

for nested like use

const table_ele_test=table().child([
tr().child([
td().text("Td 1"),
td().text("Td2")
]),
tr().child([
same way])
]).add("body")
*/



const a = () => create("a");
const abbr = () => create("abbr");
const address = () => create("address");
const area = () => create("area");
const article = () => create("article");
const aside = () => create("aside");
const audio = () => create("audio");
const b = () => create("b");
const base = () => create("base");
const bdi = () => create("bdi");
const bdo = () => create("bdo");
const blockquote = () => create("blockquote");
const body = () => create("body");
const br = () => create("br");
const button = () => create("button");
const canvas = () => create("canvas");
const caption = () => create("caption");
const cite = () => create("cite");
const code = () => create("code");
const col = () => create("col");
const colgroup = () => create("colgroup");
const data = () => create("data");
const datalist = () => create("datalist");
const dd = () => create("dd");
const del = () => create("del");
const details = () => create("details");
const dfn = () => create("dfn");
const dialog = () => create("dialog");
const div = () => create("div");
const dl = () => create("dl");
const dt = () => create("dt");
const em = () => create("em");
const embed = () => create("embed");
const fieldset = () => create("fieldset");
const figcaption = () => create("figcaption");
const figure = () => create("figure");
const footer = () => create("footer");
const form = () => create("form");
const h1 = () => create("h1");
const h2 = () => create("h2");
const h3 = () => create("h3");
const h4 = () => create("h4");
const h5 = () => create("h5");
const h6 = () => create("h6");
const head = () => create("head");
const header = () => create("header");
const hgroup = () => create("hgroup");
const hr = () => create("hr");
const html = () => create("html");
const i = () => create("i");
const iframe = () => create("iframe");
const img = () => create("img");
const input = () => create("input");
const ins = () => create("ins");
const kbd = () => create("kbd");
const label = () => create("label");
const legend = () => create("legend");
const li = () => create("li");
const link = () => create("link");
const main = () => create("main");
const map = () => create("map");
const mark = () => create("mark");
const meta = () => create("meta");
const meter = () => create("meter");
const nav = () => create("nav");
const noscript = () => create("noscript");
const object = () => create("object");
const ol = () => create("ol");
const optgroup = () => create("optgroup");
const option = () => create("option");
const output = () => create("output");
const p = () => create("p");
const picture = () => create("picture");
const pre = () => create("pre");
const progress = () => create("progress");
const q = () => create("q");
const rp = () => create("rp");
const rt = () => create("rt");
const ruby = () => create("ruby");
const s = () => create("s");
const samp = () => create("samp");
const script = () => create("script");
const section = () => create("section");
const select = () => create("select");
const small = () => create("small");
const source = () => create("source");
const span = () => create("span");
const strong = () => create("strong");
const style = () => create("style");
const sub = () => create("sub");
const summary = () => create("summary");
const sup = () => create("sup");
const table = () => create("table");
const tbody = () => create("tbody");
const td = () => create("td");
const template = () => create("template");
const textarea = () => create("textarea");
const tfoot = () => create("tfoot");
const th = () => create("th");
const thead = () => create("thead");
const time = () => create("time");
const title = () => create("title");
const tr = () => create("tr");
const track = () => create("track");
const u = () => create("u");
const ul = () => create("ul");
const varTag = () => create("var"); // 'var' is a reserved keyword, so renamed it
const video = () => create("video");
const wbr = () => create("wbr");
