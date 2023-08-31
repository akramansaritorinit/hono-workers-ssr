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
            <script src="https://cdn.tailwindcss.com"></script>
            <title>${props.title || "Hono App"}</title>
        </head>
        <script>
            document.addEventListener("DOMContentLoaded", () => {
                let count = 0;
                const incrementButton = document.getElementById("incrementButton");
                incrementButton.addEventListener("click", () => {
                    count++;
                    document.getElementById("counter").innerText = count;
                });
            });
        </script>
        <body class="p-5">
            <div id="staticContent" >
                ${props.children}
            </div>
            <div>
                <button id="incrementButton">Increment</button>
                <span id="counter">0</span>
        </body>
    </html>
`;
