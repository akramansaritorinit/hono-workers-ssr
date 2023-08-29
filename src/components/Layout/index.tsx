import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";

type LayoutProps = {
    title?: string;
    description?: string;
    children: HtmlEscapedString | HtmlEscapedString[];
};

export const Layout = (props: LayoutProps) => html`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/htmx.org@1.9.3"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <title>${props.title || "Hono App"}</title>
        </head>
        <body class="p-5">
            ${props.children}
        </body>
    </html>
`;
