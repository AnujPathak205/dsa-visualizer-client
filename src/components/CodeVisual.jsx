import { useState } from "react";
import { Copy, Check , Code2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeVisual({ code , currentLine = -1}) {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState("pseudo");

  const currCode = code[language];

  let currentLineForCurrLanguage = currentLine;
  if(language === "pseudo"){
    currentLineForCurrLanguage = code.lines.pseudo[currentLine];
  }else if(language === "python"){
    currentLineForCurrLanguage = code.lines.python[currentLine];
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(currCode);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <section
      className="
      border  dark
      rounded-xl shadow-sm hover:shadow-md transition"
    >
      
      <div className="relative">

        {/* Top Bar */}
        <div
          className="absolute top-0 left-0 w-full flex justify-between items-center 
          px-3 sm:px-4 py-2 bg-gray-900 rounded-t-lg text-xs sm:text-sm"
        >
          {/* Language Selector */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* PSEUDOCODE */}
            <span
              onClick={() => setLanguage("pseudo")}
              className={`
                cursor-pointer transition text-sm font-medium
                px-2.5 py-1 rounded-md
                ${
                  language === "pseudo"
                    ? "bg-indigo-500/20 text-indigo-400 border border-indigo-400/30"
                    : "text-slate-300 hover:text-indigo-400 border border-transparent"
                }
              `}
            >
              Pseudocode
            </span>

            {/* DIVIDER */}
            <div className="h-5 w-px bg-slate-600" />

            {/* PROGRAMMING LANGUAGES */}
            <div className="flex gap-2 sm:gap-3">
              {["java", "cpp", "python"].map((lang) => (
                <span
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`
                    cursor-pointer capitalize transition text-sm
                    ${
                      language === lang
                        ? "text-yellow-400 font-semibold"
                        : "text-slate-300 hover:text-yellow-400"
                    }
                  `}
                >
                  {lang}
                </span>
              ))}
            </div>

          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="text-slate-300 hover:text-white transition"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Code Block */}
        <SyntaxHighlighter
          language = {language === "pseudo" ? "plaintext" : language}
          style={vscDarkPlus}
          wrapLines={true}   
          showLineNumbers={true}
          lineProps={(lineNumber) => {
            const isActive = lineNumber === currentLineForCurrLanguage;

            return {
              style: {
                display: "block",
                width: "100%",
                backgroundColor: isActive ? "rgba(255,255,0,0.2)" : "transparent",
                transition: "0.3s ease",
              },
            };
          }}
          customStyle={{
            margin: 0,
            paddingTop: "45px",
            borderRadius: "10px",
            fontSize: "13px",
          }}
          codeTagProps={{
            style: {
              fontSize: "16px",
            },
          }}
        >
          {currCode}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}