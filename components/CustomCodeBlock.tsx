import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";

interface ICustomCodeBlockProps {
    children: string
    className: string
}

function CustomCodeBlock({ children, className }: ICustomCodeBlockProps) {
    const language = className ? className.replace(/language-/, "") : "";
    return (
        <Highlight
            {...defaultProps}
            theme={theme}
            code={children.trim()}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{
                        ...style,
                        marginTop: 20,
                        marginBottom: 20,
                        padding: 16,
                        overflowX: 'auto'
                    }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}

export default CustomCodeBlock;
