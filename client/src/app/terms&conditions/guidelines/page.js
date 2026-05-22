// src/app/guidelines/page.js

export default function GuidelinesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-30">

      <h1 className="text-5xl font-black mb-8">
        Content Guidelines
      </h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">

        <p>
          Users should upload safe, respectful, and original prompts.
        </p>

        <p>
          NSFW, hateful, violent, illegal, or copyrighted content is prohibited.
        </p>

        <p>
          Spam and misleading prompts may result in account restrictions.
        </p>

      </div>

    </div>
  );
}