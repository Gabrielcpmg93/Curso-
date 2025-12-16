
import React from 'react';

interface GeminiResponseProps {
  content: string;
}

export const GeminiResponse: React.FC<GeminiResponseProps> = ({ content }) => {
  const formatContent = (text: string) => {
    // Split by newlines to handle paragraphs and lists
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 my-3 pl-2">
            {listItems.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: formatLine(item.replace(/^[-*]\s*/, '')) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    const formatLine = (line: string) => {
      return line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
        inList = true;
        listItems.push(trimmedLine);
      } else {
        if (inList) {
          flushList();
        }
        if (trimmedLine) {
          elements.push(<p key={`p-${index}`} className="my-2" dangerouslySetInnerHTML={{ __html: formatLine(trimmedLine) }} />);
        }
      }
    });

    if (inList) {
      flushList();
    }

    return elements;
  };

  return (
    <div className="text-white font-mono text-sm leading-relaxed">
      {formatContent(content)}
    </div>
  );
};
