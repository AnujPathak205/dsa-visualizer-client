import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { LuCopyCheck } from "react-icons/lu";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({code}) {
  const [copied, setCopied] = useState(false);
  const [language,setLanguage] = useState("java");

  const currCode = code[language];

  const handleCopy = () => {
    navigator.clipboard.writeText(currCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };


  return (
    <div className="relative">
        {/* Top Bar INSIDE code */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-2 bg-gray-800 rounded-t">
            {/* Language Selector */}
            <div className="text-sm flex gap-3">
            {["java", "cpp", "python"].map((lang) => (
                <span
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`cursor-pointer capitalize ${
                    language === lang
                    ? "text-yellow-400 font-semibold"
                    : "text-white hover:text-yellow-400"
                }`}
                >
                {lang}
                </span>
            ))}
            </div>

            <button
                onClick={handleCopy}
                className="text-white text-sm cursor-pointer"
            >
                {copied ? <LuCopyCheck /> : <FaRegCopy />}
            </button>
        </div>

        {/* Code Section */}
        <SyntaxHighlighter
            language={language}
            style={oneDark}
            customStyle={{
                margin: 0,
                paddingTop: "50px", 
                borderRadius: "8px",
            }}
        >
            {currCode}
        </SyntaxHighlighter>
    </div>
  )
}
