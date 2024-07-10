export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on your blog information.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2800/2800015.png",
    aiPrompt:
      "Give me 5 blog idea in bullet wise only based on give niche and outline of topic and give me result in Rich text editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter you blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generate blog content depends on your blog information.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/9079/9079294.png",
    aiPrompt:
      "Generate Blog Content based on topic and outline of blog and give me result in Rich text editor format.",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter you blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generate blog ideas depends on the information you give.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/6580/6580513.png",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point wise based on give niche of topic and give me result in Rich text editor format.",
    slug: "generate-blog-ideas",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO TItle",
    desc: "An AI tool that generate Youtube SEO Title depends on the information given.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/11515/11515830.png",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas based on give keywords and outline of topic and give me result in Rich text editor format.",
    slug: "generate-ytseo-title",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter you youtube description outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that generate Youtube video description depends on the information given.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/10125/10125341.png",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on give topic and outline of topic and give me result in Rich text editor format.",
    slug: "generate-yt-description",
    form: [
      {
        label: "Enter your youtube video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter you youtube outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that generate Youtube tags depends on the information given.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/567/567651.png",
    aiPrompt:
      "Generate 10 Youtube tags based on give title and outline of topic and give me result in Rich text editor format.",
    slug: "generate-yt-tags",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "titile",
        required: true,
      },
      {
        label: "Enter you youtube description outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors in you writing.",
    category: "Writing assistant",
    icon: "https://cdn-icons-png.flaticon.com/128/3721/3721819.png",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammatical errors and give result in Rich text editor format.",
    slug: "text-improver",
    form: [
      {
        label: "Enter the text that you want to re-write or improve",
        field: "input",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "This handy tool refines your writing by adding some understandable emojis.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1470/1470522.png",
    slug: "add-emojis-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and result in Rich text editor format.",
    form: [
      {
        label: "Enter the text that you want to re-write or improve",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Code Generator",
    desc: "This handy tool that assists you in generating algorithms of DSA and many helps in fields",
    category: "coding assistant",
    icon: "https://cdn-icons-png.flaticon.com/128/4248/4248082.png",
    aiPrompt:
      "Given codingTopic, generate code for the codingTopic and give result in Code format.",
    slug: "code-generator",
    form: [
      {
        label: "Enter the topic for which you want to generate code",
        field: "input",
        name: "codingTopic",
        required: true,
      },
    ],
  },
];
