import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";

interface ICustomCodeBlockProps {
    children: string;
    className: string;
}

function CustomCodeBlock({ children, className }: ICustomCodeBlockProps) {
    const language: unknown = className ? className.replace(/language-/, "") : "";
    return (
        <Highlight
            {...defaultProps}
            theme={theme}
            code={children.trim()}
            // TODO: Learn how to cast a string into a narrowed string type
            language={language as Language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{
                        ...style,
                        padding: 10,
                        overflowX: "auto",
                    }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}

export default CustomCodeBlock;
