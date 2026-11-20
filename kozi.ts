export type Lesson = { title: string; body: string; code: string; task: string };
export type Kozi = { slug: string; title: string; description: string; long: string; lessons: Lesson[] };
export const kozi: Kozi[] = [
 {
  "slug": "python",
  "title": "Python",
  "description": "Lugha rahisi na maarufu kwa AI, web na automation.",
  "long": "Lugha rahisi na maarufu kwa AI, web na automation. Kozi hii ya Python ina masomo 5 ya vitendo, yakiwemo: Utangulizi wa Python, Variables na Data Types, Control Flow na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi wa Python",
    "body": "Python ni lugha inayosomeka kwa urahisi. Unaandika amri, Python inazitekeleza mstari kwa mstari. Hifadhi faili kama habari.py kisha endesha: python habari.py.",
    "code": "jina = input('Jina lako: ')\nprint('Habari,', jina)",
    "task": "Badilisha programu iulize umri pia na kuuchapisha."
   },
   {
    "title": "Variables na Data Types",
    "body": "Variable ni jina linalohifadhi thamani. Aina kuu: int (namba nzima), float (desimali), str (maandishi), bool (kweli/si kweli).",
    "code": "umri = 20\nurefu = 1.75\njina = 'Asha'\nanasoma = True\nprint(type(umri), type(urefu), type(jina), type(anasoma))",
    "task": "Tengeneza variables 4 kukuhusu na uzichapishe."
   },
   {
    "title": "Control Flow",
    "body": "Tumia if/elif/else kufanya maamuzi na for/while kurudia kazi. Kumbuka indentation (nafasi 4) ni sehemu ya syntax.",
    "code": "alama = 72\nif alama >= 70:\n    print('A')\nelif alama >= 50:\n    print('B')\nelse:\n    print('Jaribu tena')\nfor i in range(1, 6):\n    print(i)",
    "task": "Andika loop inayochapisha namba za 1 hadi 10 zilizo witiri."
   },
   {
    "title": "Functions",
    "body": "Function ni kipande cha code kinachoweza kutumika tena. Tumia def, vigezo (parameters) na return kurudisha jibu.",
    "code": "def jumla(a, b):\n    return a + b\n\nprint(jumla(2, 3))  # 5",
    "task": "Andika function inayokokotoa eneo la mstatili (urefu x upana)."
   },
   {
    "title": "Project Halisi: Calculator",
    "body": "Unganisha ulichojifunza kutengeneza calculator ya terminal inayomruhusu mtumiaji kuchagua operesheni.",
    "code": "def kokotoa(a, b, op):\n    if op == '+': return a + b\n    if op == '-': return a - b\n    if op == '*': return a * b\n    if op == '/': return a / b if b else 'Hauwezi kugawanya kwa 0'\n\na = float(input('Namba 1: '))\nop = input('Operesheni (+ - * /): ')\nb = float(input('Namba 2: '))\nprint(kokotoa(a, b, op))",
    "task": "Ongeza operesheni ya nguvu (**) na kitanzi kinachoendelea hadi mtumiaji aandike 'toka'."
   }
  ]
 },
 {
  "slug": "java",
  "title": "Java",
  "description": "Lugha thabiti ya programu za biashara na Android.",
  "long": "Lugha thabiti ya programu za biashara na Android. Kozi hii ya Java ina masomo 5 ya vitendo, yakiwemo: Utangulizi wa Java, Variables na Types, Madarasa na Objects na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi wa Java",
    "body": "Katika somo hili la Java utajifunza: Utangulizi wa Java. Lugha thabiti ya programu za biashara na Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "System.out.println(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi wa Java)."
   },
   {
    "title": "Variables na Types",
    "body": "Katika somo hili la Java utajifunza: Variables na Types. Lugha thabiti ya programu za biashara na Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "System.out.println(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables na Types)."
   },
   {
    "title": "Madarasa na Objects",
    "body": "Katika somo hili la Java utajifunza: Madarasa na Objects. Lugha thabiti ya programu za biashara na Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "System.out.println(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Madarasa na Objects)."
   },
   {
    "title": "Collections",
    "body": "Katika somo hili la Java utajifunza: Collections. Lugha thabiti ya programu za biashara na Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "System.out.println(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Collections)."
   },
   {
    "title": "Project Ndogo",
    "body": "Katika somo hili la Java utajifunza: Project Ndogo. Lugha thabiti ya programu za biashara na Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "System.out.println(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project Ndogo)."
   }
  ]
 },
 {
  "slug": "javascript",
  "title": "JavaScript",
  "description": "Lugha ya kuendesha tovuti zenye mwingiliano.",
  "long": "Lugha ya kuendesha tovuti zenye mwingiliano. Kozi hii ya JavaScript ina masomo 5 ya vitendo, yakiwemo: Utangulizi wa JS, Variables na Functions, DOM na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi wa JS",
    "body": "Katika somo hili la JavaScript utajifunza: Utangulizi wa JS. Lugha ya kuendesha tovuti zenye mwingiliano. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "console.log(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi wa JS)."
   },
   {
    "title": "Variables na Functions",
    "body": "Katika somo hili la JavaScript utajifunza: Variables na Functions. Lugha ya kuendesha tovuti zenye mwingiliano. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "console.log(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables na Functions)."
   },
   {
    "title": "DOM",
    "body": "Katika somo hili la JavaScript utajifunza: DOM. Lugha ya kuendesha tovuti zenye mwingiliano. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "console.log(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (DOM)."
   },
   {
    "title": "Arrays na Objects",
    "body": "Katika somo hili la JavaScript utajifunza: Arrays na Objects. Lugha ya kuendesha tovuti zenye mwingiliano. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "console.log(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Arrays na Objects)."
   },
   {
    "title": "Project ya To-Do",
    "body": "Katika somo hili la JavaScript utajifunza: Project ya To-Do. Lugha ya kuendesha tovuti zenye mwingiliano. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "console.log(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project ya To-Do)."
   }
  ]
 },
 {
  "slug": "typescript",
  "title": "TypeScript",
  "description": "JavaScript yenye types kwa code salama.",
  "long": "JavaScript yenye types kwa code salama. Kozi hii ya TypeScript ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Types za Msingi, Interfaces na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la TypeScript utajifunza: Utangulizi. JavaScript yenye types kwa code salama. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "let jina: string = \"Asha\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Types za Msingi",
    "body": "Katika somo hili la TypeScript utajifunza: Types za Msingi. JavaScript yenye types kwa code salama. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "let jina: string = \"Asha\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Types za Msingi)."
   },
   {
    "title": "Interfaces",
    "body": "Katika somo hili la TypeScript utajifunza: Interfaces. JavaScript yenye types kwa code salama. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "let jina: string = \"Asha\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Interfaces)."
   },
   {
    "title": "Generics",
    "body": "Katika somo hili la TypeScript utajifunza: Generics. JavaScript yenye types kwa code salama. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "let jina: string = \"Asha\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Generics)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la TypeScript utajifunza: Project. JavaScript yenye types kwa code salama. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "let jina: string = \"Asha\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "dotnet",
  "title": ".NET",
  "description": "Jukwaa la Microsoft kujenga web, desktop na cloud apps.",
  "long": "Jukwaa la Microsoft kujenga web, desktop na cloud apps. Kozi hii ya .NET ina masomo 5 ya vitendo, yakiwemo: Utangulizi wa .NET, Project Structure, ASP.NET Core na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi wa .NET",
    "body": "Katika somo hili la .NET utajifunza: Utangulizi wa .NET. Jukwaa la Microsoft kujenga web, desktop na cloud apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "var app = WebApplication.CreateBuilder(args).Build();",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi wa .NET)."
   },
   {
    "title": "Project Structure",
    "body": "Katika somo hili la .NET utajifunza: Project Structure. Jukwaa la Microsoft kujenga web, desktop na cloud apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "var app = WebApplication.CreateBuilder(args).Build();",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project Structure)."
   },
   {
    "title": "ASP.NET Core",
    "body": "Katika somo hili la .NET utajifunza: ASP.NET Core. Jukwaa la Microsoft kujenga web, desktop na cloud apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "var app = WebApplication.CreateBuilder(args).Build();",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (ASP.NET Core)."
   },
   {
    "title": "Entity Framework",
    "body": "Katika somo hili la .NET utajifunza: Entity Framework. Jukwaa la Microsoft kujenga web, desktop na cloud apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "var app = WebApplication.CreateBuilder(args).Build();",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Entity Framework)."
   },
   {
    "title": "Deploy",
    "body": "Katika somo hili la .NET utajifunza: Deploy. Jukwaa la Microsoft kujenga web, desktop na cloud apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "var app = WebApplication.CreateBuilder(args).Build();",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Deploy)."
   }
  ]
 },
 {
  "slug": "csharp",
  "title": "C#",
  "description": "Lugha ya kisasa ya .NET na michezo ya Unity.",
  "long": "Lugha ya kisasa ya .NET na michezo ya Unity. Kozi hii ya C# ina masomo 5 ya vitendo, yakiwemo: Utangulizi wa C#, Variables, Madarasa na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi wa C#",
    "body": "Katika somo hili la C# utajifunza: Utangulizi wa C#. Lugha ya kisasa ya .NET na michezo ya Unity. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Console.WriteLine(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi wa C#)."
   },
   {
    "title": "Variables",
    "body": "Katika somo hili la C# utajifunza: Variables. Lugha ya kisasa ya .NET na michezo ya Unity. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Console.WriteLine(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables)."
   },
   {
    "title": "Madarasa",
    "body": "Katika somo hili la C# utajifunza: Madarasa. Lugha ya kisasa ya .NET na michezo ya Unity. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Console.WriteLine(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Madarasa)."
   },
   {
    "title": "LINQ",
    "body": "Katika somo hili la C# utajifunza: LINQ. Lugha ya kisasa ya .NET na michezo ya Unity. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Console.WriteLine(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (LINQ)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la C# utajifunza: Project. Lugha ya kisasa ya .NET na michezo ya Unity. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Console.WriteLine(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "cpp",
  "title": "C++",
  "description": "Lugha ya kasi kwa mifumo na michezo.",
  "long": "Lugha ya kasi kwa mifumo na michezo. Kozi hii ya C++ ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Pointers, Madarasa na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la C++ utajifunza: Utangulizi. Lugha ya kasi kwa mifumo na michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "std::cout << \"Habari\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Pointers",
    "body": "Katika somo hili la C++ utajifunza: Pointers. Lugha ya kasi kwa mifumo na michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "std::cout << \"Habari\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pointers)."
   },
   {
    "title": "Madarasa",
    "body": "Katika somo hili la C++ utajifunza: Madarasa. Lugha ya kasi kwa mifumo na michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "std::cout << \"Habari\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Madarasa)."
   },
   {
    "title": "STL",
    "body": "Katika somo hili la C++ utajifunza: STL. Lugha ya kasi kwa mifumo na michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "std::cout << \"Habari\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (STL)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la C++ utajifunza: Project. Lugha ya kasi kwa mifumo na michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "std::cout << \"Habari\";",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "c",
  "title": "C",
  "description": "Msingi wa lugha nyingi za kompyuta.",
  "long": "Msingi wa lugha nyingi za kompyuta. Kozi hii ya C ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Data Types, Pointers na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la C utajifunza: Utangulizi. Msingi wa lugha nyingi za kompyuta. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "printf(\"Habari\\n\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Data Types",
    "body": "Katika somo hili la C utajifunza: Data Types. Msingi wa lugha nyingi za kompyuta. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "printf(\"Habari\\n\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data Types)."
   },
   {
    "title": "Pointers",
    "body": "Katika somo hili la C utajifunza: Pointers. Msingi wa lugha nyingi za kompyuta. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "printf(\"Habari\\n\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pointers)."
   },
   {
    "title": "Memory",
    "body": "Katika somo hili la C utajifunza: Memory. Msingi wa lugha nyingi za kompyuta. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "printf(\"Habari\\n\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Memory)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la C utajifunza: Project. Msingi wa lugha nyingi za kompyuta. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "printf(\"Habari\\n\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "go",
  "title": "Go",
  "description": "Lugha ya Google kwa backend na cloud.",
  "long": "Lugha ya Google kwa backend na cloud. Kozi hii ya Go ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Functions, Structs na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Go utajifunza: Utangulizi. Lugha ya Google kwa backend na cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "fmt.Println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Functions",
    "body": "Katika somo hili la Go utajifunza: Functions. Lugha ya Google kwa backend na cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "fmt.Println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Functions)."
   },
   {
    "title": "Structs",
    "body": "Katika somo hili la Go utajifunza: Structs. Lugha ya Google kwa backend na cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "fmt.Println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Structs)."
   },
   {
    "title": "Goroutines",
    "body": "Katika somo hili la Go utajifunza: Goroutines. Lugha ya Google kwa backend na cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "fmt.Println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Goroutines)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Go utajifunza: Project. Lugha ya Google kwa backend na cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "fmt.Println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "rust",
  "title": "Rust",
  "description": "Lugha salama na ya kasi kwa mifumo.",
  "long": "Lugha salama na ya kasi kwa mifumo. Kozi hii ya Rust ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Ownership, Structs na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Rust utajifunza: Utangulizi. Lugha salama na ya kasi kwa mifumo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println!(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Ownership",
    "body": "Katika somo hili la Rust utajifunza: Ownership. Lugha salama na ya kasi kwa mifumo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println!(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Ownership)."
   },
   {
    "title": "Structs",
    "body": "Katika somo hili la Rust utajifunza: Structs. Lugha salama na ya kasi kwa mifumo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println!(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Structs)."
   },
   {
    "title": "Error Handling",
    "body": "Katika somo hili la Rust utajifunza: Error Handling. Lugha salama na ya kasi kwa mifumo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println!(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Error Handling)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Rust utajifunza: Project. Lugha salama na ya kasi kwa mifumo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println!(\"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "kotlin",
  "title": "Kotlin",
  "description": "Lugha rasmi ya Android.",
  "long": "Lugha rasmi ya Android. Kozi hii ya Kotlin ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Variables, Classes na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Kotlin utajifunza: Utangulizi. Lugha rasmi ya Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Variables",
    "body": "Katika somo hili la Kotlin utajifunza: Variables. Lugha rasmi ya Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables)."
   },
   {
    "title": "Classes",
    "body": "Katika somo hili la Kotlin utajifunza: Classes. Lugha rasmi ya Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Classes)."
   },
   {
    "title": "Coroutines",
    "body": "Katika somo hili la Kotlin utajifunza: Coroutines. Lugha rasmi ya Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Coroutines)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Kotlin utajifunza: Project. Lugha rasmi ya Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "println(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "swift",
  "title": "Swift",
  "description": "Lugha ya Apple kwa iPhone na Mac.",
  "long": "Lugha ya Apple kwa iPhone na Mac. Kozi hii ya Swift ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Variables, Structs na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Swift utajifunza: Utangulizi. Lugha ya Apple kwa iPhone na Mac. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Variables",
    "body": "Katika somo hili la Swift utajifunza: Variables. Lugha ya Apple kwa iPhone na Mac. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables)."
   },
   {
    "title": "Structs",
    "body": "Katika somo hili la Swift utajifunza: Structs. Lugha ya Apple kwa iPhone na Mac. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Structs)."
   },
   {
    "title": "Optionals",
    "body": "Katika somo hili la Swift utajifunza: Optionals. Lugha ya Apple kwa iPhone na Mac. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Optionals)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Swift utajifunza: Project. Lugha ya Apple kwa iPhone na Mac. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "php",
  "title": "PHP",
  "description": "Lugha ya server inayoendesha sehemu kubwa ya wavuti.",
  "long": "Lugha ya server inayoendesha sehemu kubwa ya wavuti. Kozi hii ya PHP ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Variables, Forms na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la PHP utajifunza: Utangulizi. Lugha ya server inayoendesha sehemu kubwa ya wavuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<?php echo \"Habari\"; ?>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Variables",
    "body": "Katika somo hili la PHP utajifunza: Variables. Lugha ya server inayoendesha sehemu kubwa ya wavuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<?php echo \"Habari\"; ?>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables)."
   },
   {
    "title": "Forms",
    "body": "Katika somo hili la PHP utajifunza: Forms. Lugha ya server inayoendesha sehemu kubwa ya wavuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<?php echo \"Habari\"; ?>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Forms)."
   },
   {
    "title": "MySQL",
    "body": "Katika somo hili la PHP utajifunza: MySQL. Lugha ya server inayoendesha sehemu kubwa ya wavuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<?php echo \"Habari\"; ?>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (MySQL)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la PHP utajifunza: Project. Lugha ya server inayoendesha sehemu kubwa ya wavuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<?php echo \"Habari\"; ?>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "laravel",
  "title": "Laravel",
  "description": "Framework bora ya PHP.",
  "long": "Framework bora ya PHP. Kozi hii ya Laravel ina masomo 5 ya vitendo, yakiwemo: Usakinishaji, Routing, Blade na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Usakinishaji",
    "body": "Katika somo hili la Laravel utajifunza: Usakinishaji. Framework bora ya PHP. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Route::get(\"/\", fn() => \"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usakinishaji)."
   },
   {
    "title": "Routing",
    "body": "Katika somo hili la Laravel utajifunza: Routing. Framework bora ya PHP. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Route::get(\"/\", fn() => \"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Routing)."
   },
   {
    "title": "Blade",
    "body": "Katika somo hili la Laravel utajifunza: Blade. Framework bora ya PHP. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Route::get(\"/\", fn() => \"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Blade)."
   },
   {
    "title": "Eloquent",
    "body": "Katika somo hili la Laravel utajifunza: Eloquent. Framework bora ya PHP. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Route::get(\"/\", fn() => \"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Eloquent)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Laravel utajifunza: Project. Framework bora ya PHP. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Route::get(\"/\", fn() => \"Habari\");",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "ruby",
  "title": "Ruby",
  "description": "Lugha nzuri inayosomeka kama Kiingereza.",
  "long": "Lugha nzuri inayosomeka kama Kiingereza. Kozi hii ya Ruby ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Methods, Blocks na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Ruby utajifunza: Utangulizi. Lugha nzuri inayosomeka kama Kiingereza. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "puts \"Habari\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Methods",
    "body": "Katika somo hili la Ruby utajifunza: Methods. Lugha nzuri inayosomeka kama Kiingereza. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "puts \"Habari\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Methods)."
   },
   {
    "title": "Blocks",
    "body": "Katika somo hili la Ruby utajifunza: Blocks. Lugha nzuri inayosomeka kama Kiingereza. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "puts \"Habari\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Blocks)."
   },
   {
    "title": "Classes",
    "body": "Katika somo hili la Ruby utajifunza: Classes. Lugha nzuri inayosomeka kama Kiingereza. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "puts \"Habari\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Classes)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Ruby utajifunza: Project. Lugha nzuri inayosomeka kama Kiingereza. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "puts \"Habari\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "html-css",
  "title": "HTML/CSS",
  "description": "Msingi wa kila tovuti.",
  "long": "Msingi wa kila tovuti. Kozi hii ya HTML/CSS ina masomo 5 ya vitendo, yakiwemo: HTML ya Msingi, Forms, CSS Selectors na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "HTML ya Msingi",
    "body": "Katika somo hili la HTML/CSS utajifunza: HTML ya Msingi. Msingi wa kila tovuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<h1 style=\"color:green\">Habari</h1>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (HTML ya Msingi)."
   },
   {
    "title": "Forms",
    "body": "Katika somo hili la HTML/CSS utajifunza: Forms. Msingi wa kila tovuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<h1 style=\"color:green\">Habari</h1>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Forms)."
   },
   {
    "title": "CSS Selectors",
    "body": "Katika somo hili la HTML/CSS utajifunza: CSS Selectors. Msingi wa kila tovuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<h1 style=\"color:green\">Habari</h1>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (CSS Selectors)."
   },
   {
    "title": "Flexbox",
    "body": "Katika somo hili la HTML/CSS utajifunza: Flexbox. Msingi wa kila tovuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<h1 style=\"color:green\">Habari</h1>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Flexbox)."
   },
   {
    "title": "Tovuti Kamili",
    "body": "Katika somo hili la HTML/CSS utajifunza: Tovuti Kamili. Msingi wa kila tovuti. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<h1 style=\"color:green\">Habari</h1>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Tovuti Kamili)."
   }
  ]
 },
 {
  "slug": "react",
  "title": "React",
  "description": "Maktaba ya kujenga UI za kisasa.",
  "long": "Maktaba ya kujenga UI za kisasa. Kozi hii ya React ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Components, State na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la React utajifunza: Utangulizi. Maktaba ya kujenga UI za kisasa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const [n,setN]=useState(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Components",
    "body": "Katika somo hili la React utajifunza: Components. Maktaba ya kujenga UI za kisasa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const [n,setN]=useState(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Components)."
   },
   {
    "title": "State",
    "body": "Katika somo hili la React utajifunza: State. Maktaba ya kujenga UI za kisasa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const [n,setN]=useState(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (State)."
   },
   {
    "title": "Effects",
    "body": "Katika somo hili la React utajifunza: Effects. Maktaba ya kujenga UI za kisasa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const [n,setN]=useState(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Effects)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la React utajifunza: Project. Maktaba ya kujenga UI za kisasa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const [n,setN]=useState(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "nextjs",
  "title": "Next.js",
  "description": "Framework ya React ya full-stack.",
  "long": "Framework ya React ya full-stack. Kozi hii ya Next.js ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Routing, API Routes na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Next.js utajifunza: Utangulizi. Framework ya React ya full-stack. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "export default function Page(){return <h1>Habari</h1>}",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Routing",
    "body": "Katika somo hili la Next.js utajifunza: Routing. Framework ya React ya full-stack. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "export default function Page(){return <h1>Habari</h1>}",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Routing)."
   },
   {
    "title": "API Routes",
    "body": "Katika somo hili la Next.js utajifunza: API Routes. Framework ya React ya full-stack. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "export default function Page(){return <h1>Habari</h1>}",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (API Routes)."
   },
   {
    "title": "Data Fetching",
    "body": "Katika somo hili la Next.js utajifunza: Data Fetching. Framework ya React ya full-stack. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "export default function Page(){return <h1>Habari</h1>}",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data Fetching)."
   },
   {
    "title": "Deploy Vercel",
    "body": "Katika somo hili la Next.js utajifunza: Deploy Vercel. Framework ya React ya full-stack. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "export default function Page(){return <h1>Habari</h1>}",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Deploy Vercel)."
   }
  ]
 },
 {
  "slug": "nodejs",
  "title": "Node.js",
  "description": "JavaScript upande wa server.",
  "long": "JavaScript upande wa server. Kozi hii ya Node.js ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Modules, Express na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Node.js utajifunza: Utangulizi. JavaScript upande wa server. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "require(\"http\").createServer((q,r)=>r.end(\"Habari\")).listen(3000);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Modules",
    "body": "Katika somo hili la Node.js utajifunza: Modules. JavaScript upande wa server. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "require(\"http\").createServer((q,r)=>r.end(\"Habari\")).listen(3000);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Modules)."
   },
   {
    "title": "Express",
    "body": "Katika somo hili la Node.js utajifunza: Express. JavaScript upande wa server. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "require(\"http\").createServer((q,r)=>r.end(\"Habari\")).listen(3000);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Express)."
   },
   {
    "title": "REST API",
    "body": "Katika somo hili la Node.js utajifunza: REST API. JavaScript upande wa server. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "require(\"http\").createServer((q,r)=>r.end(\"Habari\")).listen(3000);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (REST API)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Node.js utajifunza: Project. JavaScript upande wa server. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "require(\"http\").createServer((q,r)=>r.end(\"Habari\")).listen(3000);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "vue",
  "title": "Vue.js",
  "description": "Framework rahisi ya UI.",
  "long": "Framework rahisi ya UI. Kozi hii ya Vue.js ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Templates, Reactivity na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Vue.js utajifunza: Utangulizi. Framework rahisi ya UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const n = ref(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Templates",
    "body": "Katika somo hili la Vue.js utajifunza: Templates. Framework rahisi ya UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const n = ref(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Templates)."
   },
   {
    "title": "Reactivity",
    "body": "Katika somo hili la Vue.js utajifunza: Reactivity. Framework rahisi ya UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const n = ref(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Reactivity)."
   },
   {
    "title": "Components",
    "body": "Katika somo hili la Vue.js utajifunza: Components. Framework rahisi ya UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const n = ref(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Components)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Vue.js utajifunza: Project. Framework rahisi ya UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "const n = ref(0);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "angular",
  "title": "Angular",
  "description": "Framework kamili ya Google.",
  "long": "Framework kamili ya Google. Kozi hii ya Angular ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Components, Services na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Angular utajifunza: Utangulizi. Framework kamili ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@Component({selector:\"app-root\",template:\"Habari\"})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Components",
    "body": "Katika somo hili la Angular utajifunza: Components. Framework kamili ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@Component({selector:\"app-root\",template:\"Habari\"})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Components)."
   },
   {
    "title": "Services",
    "body": "Katika somo hili la Angular utajifunza: Services. Framework kamili ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@Component({selector:\"app-root\",template:\"Habari\"})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Services)."
   },
   {
    "title": "Routing",
    "body": "Katika somo hili la Angular utajifunza: Routing. Framework kamili ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@Component({selector:\"app-root\",template:\"Habari\"})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Routing)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Angular utajifunza: Project. Framework kamili ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@Component({selector:\"app-root\",template:\"Habari\"})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "tailwind",
  "title": "Tailwind CSS",
  "description": "CSS ya utility-first.",
  "long": "CSS ya utility-first. Kozi hii ya Tailwind CSS ina masomo 5 ya vitendo, yakiwemo: Usakinishaji, Utilities, Responsive na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Usakinishaji",
    "body": "Katika somo hili la Tailwind CSS utajifunza: Usakinishaji. CSS ya utility-first. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<div class=\"bg-blue-600 p-4 text-white\">Habari</div>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usakinishaji)."
   },
   {
    "title": "Utilities",
    "body": "Katika somo hili la Tailwind CSS utajifunza: Utilities. CSS ya utility-first. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<div class=\"bg-blue-600 p-4 text-white\">Habari</div>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utilities)."
   },
   {
    "title": "Responsive",
    "body": "Katika somo hili la Tailwind CSS utajifunza: Responsive. CSS ya utility-first. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<div class=\"bg-blue-600 p-4 text-white\">Habari</div>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Responsive)."
   },
   {
    "title": "Components",
    "body": "Katika somo hili la Tailwind CSS utajifunza: Components. CSS ya utility-first. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<div class=\"bg-blue-600 p-4 text-white\">Habari</div>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Components)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Tailwind CSS utajifunza: Project. CSS ya utility-first. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<div class=\"bg-blue-600 p-4 text-white\">Habari</div>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "flutter",
  "title": "Flutter",
  "description": "Apps za Android na iOS kwa code moja.",
  "long": "Apps za Android na iOS kwa code moja. Kozi hii ya Flutter ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Widgets, State na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Flutter utajifunza: Utangulizi. Apps za Android na iOS kwa code moja. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "runApp(const Text(\"Habari\"));",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Widgets",
    "body": "Katika somo hili la Flutter utajifunza: Widgets. Apps za Android na iOS kwa code moja. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "runApp(const Text(\"Habari\"));",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Widgets)."
   },
   {
    "title": "State",
    "body": "Katika somo hili la Flutter utajifunza: State. Apps za Android na iOS kwa code moja. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "runApp(const Text(\"Habari\"));",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (State)."
   },
   {
    "title": "Navigation",
    "body": "Katika somo hili la Flutter utajifunza: Navigation. Apps za Android na iOS kwa code moja. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "runApp(const Text(\"Habari\"));",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Navigation)."
   },
   {
    "title": "App Kamili",
    "body": "Katika somo hili la Flutter utajifunza: App Kamili. Apps za Android na iOS kwa code moja. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "runApp(const Text(\"Habari\"));",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (App Kamili)."
   }
  ]
 },
 {
  "slug": "react-native",
  "title": "React Native",
  "description": "Apps za simu kwa React.",
  "long": "Apps za simu kwa React. Kozi hii ya React Native ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Components, Navigation na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la React Native utajifunza: Utangulizi. Apps za simu kwa React. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<Text>Habari</Text>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Components",
    "body": "Katika somo hili la React Native utajifunza: Components. Apps za simu kwa React. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<Text>Habari</Text>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Components)."
   },
   {
    "title": "Navigation",
    "body": "Katika somo hili la React Native utajifunza: Navigation. Apps za simu kwa React. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<Text>Habari</Text>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Navigation)."
   },
   {
    "title": "Storage",
    "body": "Katika somo hili la React Native utajifunza: Storage. Apps za simu kwa React. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<Text>Habari</Text>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Storage)."
   },
   {
    "title": "App",
    "body": "Katika somo hili la React Native utajifunza: App. Apps za simu kwa React. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<Text>Habari</Text>",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (App)."
   }
  ]
 },
 {
  "slug": "android",
  "title": "Android Development",
  "description": "Kujenga apps za Android.",
  "long": "Kujenga apps za Android. Kozi hii ya Android Development ina masomo 5 ya vitendo, yakiwemo: Android Studio, Activities, Layouts na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Android Studio",
    "body": "Katika somo hili la Android Development utajifunza: Android Studio. Kujenga apps za Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Toast.makeText(this,\"Habari\",Toast.LENGTH_SHORT).show()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Android Studio)."
   },
   {
    "title": "Activities",
    "body": "Katika somo hili la Android Development utajifunza: Activities. Kujenga apps za Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Toast.makeText(this,\"Habari\",Toast.LENGTH_SHORT).show()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Activities)."
   },
   {
    "title": "Layouts",
    "body": "Katika somo hili la Android Development utajifunza: Layouts. Kujenga apps za Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Toast.makeText(this,\"Habari\",Toast.LENGTH_SHORT).show()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Layouts)."
   },
   {
    "title": "Data",
    "body": "Katika somo hili la Android Development utajifunza: Data. Kujenga apps za Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Toast.makeText(this,\"Habari\",Toast.LENGTH_SHORT).show()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data)."
   },
   {
    "title": "App",
    "body": "Katika somo hili la Android Development utajifunza: App. Kujenga apps za Android. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Toast.makeText(this,\"Habari\",Toast.LENGTH_SHORT).show()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (App)."
   }
  ]
 },
 {
  "slug": "ios",
  "title": "iOS Development",
  "description": "Kujenga apps za iPhone.",
  "long": "Kujenga apps za iPhone. Kozi hii ya iOS Development ina masomo 5 ya vitendo, yakiwemo: Xcode, SwiftUI, Navigation na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Xcode",
    "body": "Katika somo hili la iOS Development utajifunza: Xcode. Kujenga apps za iPhone. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Text(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Xcode)."
   },
   {
    "title": "SwiftUI",
    "body": "Katika somo hili la iOS Development utajifunza: SwiftUI. Kujenga apps za iPhone. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Text(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (SwiftUI)."
   },
   {
    "title": "Navigation",
    "body": "Katika somo hili la iOS Development utajifunza: Navigation. Kujenga apps za iPhone. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Text(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Navigation)."
   },
   {
    "title": "Data",
    "body": "Katika somo hili la iOS Development utajifunza: Data. Kujenga apps za iPhone. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Text(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data)."
   },
   {
    "title": "App",
    "body": "Katika somo hili la iOS Development utajifunza: App. Kujenga apps za iPhone. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Text(\"Habari\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (App)."
   }
  ]
 },
 {
  "slug": "ui-ux",
  "title": "UI/UX Design",
  "description": "Kubuni bidhaa rahisi kutumia.",
  "long": "Kubuni bidhaa rahisi kutumia. Kozi hii ya UI/UX Design ina masomo 5 ya vitendo, yakiwemo: Misingi ya UX, Utafiti, Wireframes na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Misingi ya UX",
    "body": "Katika somo hili la UI/UX Design utajifunza: Misingi ya UX. Kubuni bidhaa rahisi kutumia. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Contrast ratio ya chini: 4.5:1 */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Misingi ya UX)."
   },
   {
    "title": "Utafiti",
    "body": "Katika somo hili la UI/UX Design utajifunza: Utafiti. Kubuni bidhaa rahisi kutumia. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Contrast ratio ya chini: 4.5:1 */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utafiti)."
   },
   {
    "title": "Wireframes",
    "body": "Katika somo hili la UI/UX Design utajifunza: Wireframes. Kubuni bidhaa rahisi kutumia. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Contrast ratio ya chini: 4.5:1 */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Wireframes)."
   },
   {
    "title": "Rangi na Fonts",
    "body": "Katika somo hili la UI/UX Design utajifunza: Rangi na Fonts. Kubuni bidhaa rahisi kutumia. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Contrast ratio ya chini: 4.5:1 */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Rangi na Fonts)."
   },
   {
    "title": "Prototype",
    "body": "Katika somo hili la UI/UX Design utajifunza: Prototype. Kubuni bidhaa rahisi kutumia. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Contrast ratio ya chini: 4.5:1 */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Prototype)."
   }
  ]
 },
 {
  "slug": "figma",
  "title": "Figma",
  "description": "Zana ya kubuni UI.",
  "long": "Zana ya kubuni UI. Kozi hii ya Figma ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Frames, Components na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Figma utajifunza: Utangulizi. Zana ya kubuni UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Shortcut: Shift+A = Auto Layout */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Frames",
    "body": "Katika somo hili la Figma utajifunza: Frames. Zana ya kubuni UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Shortcut: Shift+A = Auto Layout */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Frames)."
   },
   {
    "title": "Components",
    "body": "Katika somo hili la Figma utajifunza: Components. Zana ya kubuni UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Shortcut: Shift+A = Auto Layout */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Components)."
   },
   {
    "title": "Auto Layout",
    "body": "Katika somo hili la Figma utajifunza: Auto Layout. Zana ya kubuni UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Shortcut: Shift+A = Auto Layout */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Auto Layout)."
   },
   {
    "title": "Prototype",
    "body": "Katika somo hili la Figma utajifunza: Prototype. Zana ya kubuni UI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Shortcut: Shift+A = Auto Layout */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Prototype)."
   }
  ]
 },
 {
  "slug": "ai",
  "title": "Akili Bandia (AI)",
  "description": "Misingi ya AI na matumizi yake.",
  "long": "Misingi ya AI na matumizi yake. Kozi hii ya Akili Bandia (AI) ina masomo 5 ya vitendo, yakiwemo: AI ni Nini, Aina za AI, Data na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "AI ni Nini",
    "body": "Katika somo hili la Akili Bandia (AI) utajifunza: AI ni Nini. Misingi ya AI na matumizi yake. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari AI\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (AI ni Nini)."
   },
   {
    "title": "Aina za AI",
    "body": "Katika somo hili la Akili Bandia (AI) utajifunza: Aina za AI. Misingi ya AI na matumizi yake. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari AI\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Aina za AI)."
   },
   {
    "title": "Data",
    "body": "Katika somo hili la Akili Bandia (AI) utajifunza: Data. Misingi ya AI na matumizi yake. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari AI\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data)."
   },
   {
    "title": "Ethics",
    "body": "Katika somo hili la Akili Bandia (AI) utajifunza: Ethics. Misingi ya AI na matumizi yake. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari AI\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Ethics)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Akili Bandia (AI) utajifunza: Project. Misingi ya AI na matumizi yake. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "print(\"Habari AI\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "machine-learning",
  "title": "Machine Learning",
  "description": "Kufundisha kompyuta kujifunza kutoka data.",
  "long": "Kufundisha kompyuta kujifunza kutoka data. Kozi hii ya Machine Learning ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Regression, Classification na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Machine Learning utajifunza: Utangulizi. Kufundisha kompyuta kujifunza kutoka data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model.fit(X_train, y_train)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Regression",
    "body": "Katika somo hili la Machine Learning utajifunza: Regression. Kufundisha kompyuta kujifunza kutoka data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model.fit(X_train, y_train)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Regression)."
   },
   {
    "title": "Classification",
    "body": "Katika somo hili la Machine Learning utajifunza: Classification. Kufundisha kompyuta kujifunza kutoka data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model.fit(X_train, y_train)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Classification)."
   },
   {
    "title": "Tathmini",
    "body": "Katika somo hili la Machine Learning utajifunza: Tathmini. Kufundisha kompyuta kujifunza kutoka data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model.fit(X_train, y_train)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Tathmini)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Machine Learning utajifunza: Project. Kufundisha kompyuta kujifunza kutoka data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model.fit(X_train, y_train)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "deep-learning",
  "title": "Deep Learning",
  "description": "Neural networks za kina.",
  "long": "Neural networks za kina. Kozi hii ya Deep Learning ina masomo 5 ya vitendo, yakiwemo: Neurons, Layers, Training na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Neurons",
    "body": "Katika somo hili la Deep Learning utajifunza: Neurons. Neural networks za kina. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model = Sequential([Dense(8,activation=\"relu\")])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Neurons)."
   },
   {
    "title": "Layers",
    "body": "Katika somo hili la Deep Learning utajifunza: Layers. Neural networks za kina. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model = Sequential([Dense(8,activation=\"relu\")])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Layers)."
   },
   {
    "title": "Training",
    "body": "Katika somo hili la Deep Learning utajifunza: Training. Neural networks za kina. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model = Sequential([Dense(8,activation=\"relu\")])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Training)."
   },
   {
    "title": "CNN",
    "body": "Katika somo hili la Deep Learning utajifunza: CNN. Neural networks za kina. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model = Sequential([Dense(8,activation=\"relu\")])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (CNN)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Deep Learning utajifunza: Project. Neural networks za kina. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "model = Sequential([Dense(8,activation=\"relu\")])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "prompt-engineering",
  "title": "Prompt Engineering",
  "description": "Kuandika maagizo bora kwa AI.",
  "long": "Kuandika maagizo bora kwa AI. Kozi hii ya Prompt Engineering ina masomo 5 ya vitendo, yakiwemo: Misingi, Muktadha, Mifano na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Misingi",
    "body": "Katika somo hili la Prompt Engineering utajifunza: Misingi. Kuandika maagizo bora kwa AI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "\"Wewe ni mwalimu. Eleza Python kwa mfano.\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Misingi)."
   },
   {
    "title": "Muktadha",
    "body": "Katika somo hili la Prompt Engineering utajifunza: Muktadha. Kuandika maagizo bora kwa AI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "\"Wewe ni mwalimu. Eleza Python kwa mfano.\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Muktadha)."
   },
   {
    "title": "Mifano",
    "body": "Katika somo hili la Prompt Engineering utajifunza: Mifano. Kuandika maagizo bora kwa AI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "\"Wewe ni mwalimu. Eleza Python kwa mfano.\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Mifano)."
   },
   {
    "title": "Mnyororo",
    "body": "Katika somo hili la Prompt Engineering utajifunza: Mnyororo. Kuandika maagizo bora kwa AI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "\"Wewe ni mwalimu. Eleza Python kwa mfano.\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Mnyororo)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Prompt Engineering utajifunza: Project. Kuandika maagizo bora kwa AI. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "\"Wewe ni mwalimu. Eleza Python kwa mfano.\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "data-science",
  "title": "Data Science",
  "description": "Kuchambua data kupata maarifa.",
  "long": "Kuchambua data kupata maarifa. Kozi hii ya Data Science ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Pandas, Visualization na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Data Science utajifunza: Utangulizi. Kuchambua data kupata maarifa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.describe()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Pandas",
    "body": "Katika somo hili la Data Science utajifunza: Pandas. Kuchambua data kupata maarifa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.describe()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pandas)."
   },
   {
    "title": "Visualization",
    "body": "Katika somo hili la Data Science utajifunza: Visualization. Kuchambua data kupata maarifa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.describe()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Visualization)."
   },
   {
    "title": "Takwimu",
    "body": "Katika somo hili la Data Science utajifunza: Takwimu. Kuchambua data kupata maarifa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.describe()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Takwimu)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Data Science utajifunza: Project. Kuchambua data kupata maarifa. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.describe()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "data-analysis",
  "title": "Data Analysis",
  "description": "Kusafisha na kuchambua data.",
  "long": "Kusafisha na kuchambua data. Kozi hii ya Data Analysis ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Kusafisha, Pivot na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Data Analysis utajifunza: Utangulizi. Kusafisha na kuchambua data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.groupby(\"mkoa\").sum()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Kusafisha",
    "body": "Katika somo hili la Data Analysis utajifunza: Kusafisha. Kusafisha na kuchambua data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.groupby(\"mkoa\").sum()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Kusafisha)."
   },
   {
    "title": "Pivot",
    "body": "Katika somo hili la Data Analysis utajifunza: Pivot. Kusafisha na kuchambua data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.groupby(\"mkoa\").sum()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pivot)."
   },
   {
    "title": "Charts",
    "body": "Katika somo hili la Data Analysis utajifunza: Charts. Kusafisha na kuchambua data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.groupby(\"mkoa\").sum()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Charts)."
   },
   {
    "title": "Ripoti",
    "body": "Katika somo hili la Data Analysis utajifunza: Ripoti. Kusafisha na kuchambua data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "df.groupby(\"mkoa\").sum()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Ripoti)."
   }
  ]
 },
 {
  "slug": "sql",
  "title": "SQL",
  "description": "Lugha ya kuuliza databases.",
  "long": "Lugha ya kuuliza databases. Kozi hii ya SQL ina masomo 5 ya vitendo, yakiwemo: SELECT, WHERE, JOIN na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "SELECT",
    "body": "Katika somo hili la SQL utajifunza: SELECT. Lugha ya kuuliza databases. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "SELECT * FROM wanafunzi WHERE umri > 18;",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (SELECT)."
   },
   {
    "title": "WHERE",
    "body": "Katika somo hili la SQL utajifunza: WHERE. Lugha ya kuuliza databases. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "SELECT * FROM wanafunzi WHERE umri > 18;",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (WHERE)."
   },
   {
    "title": "JOIN",
    "body": "Katika somo hili la SQL utajifunza: JOIN. Lugha ya kuuliza databases. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "SELECT * FROM wanafunzi WHERE umri > 18;",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (JOIN)."
   },
   {
    "title": "GROUP BY",
    "body": "Katika somo hili la SQL utajifunza: GROUP BY. Lugha ya kuuliza databases. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "SELECT * FROM wanafunzi WHERE umri > 18;",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (GROUP BY)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la SQL utajifunza: Project. Lugha ya kuuliza databases. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "SELECT * FROM wanafunzi WHERE umri > 18;",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "mongodb",
  "title": "MongoDB",
  "description": "Database ya NoSQL.",
  "long": "Database ya NoSQL. Kozi hii ya MongoDB ina masomo 5 ya vitendo, yakiwemo: Utangulizi, CRUD, Queries na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la MongoDB utajifunza: Utangulizi. Database ya NoSQL. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "db.users.find({umri:{$gt:18}})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "CRUD",
    "body": "Katika somo hili la MongoDB utajifunza: CRUD. Database ya NoSQL. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "db.users.find({umri:{$gt:18}})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (CRUD)."
   },
   {
    "title": "Queries",
    "body": "Katika somo hili la MongoDB utajifunza: Queries. Database ya NoSQL. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "db.users.find({umri:{$gt:18}})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Queries)."
   },
   {
    "title": "Aggregation",
    "body": "Katika somo hili la MongoDB utajifunza: Aggregation. Database ya NoSQL. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "db.users.find({umri:{$gt:18}})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Aggregation)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la MongoDB utajifunza: Project. Database ya NoSQL. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "db.users.find({umri:{$gt:18}})",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "postgresql",
  "title": "PostgreSQL",
  "description": "Database yenye nguvu ya open-source.",
  "long": "Database yenye nguvu ya open-source. Kozi hii ya PostgreSQL ina masomo 5 ya vitendo, yakiwemo: Usakinishaji, Tables, Queries na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Usakinishaji",
    "body": "Katika somo hili la PostgreSQL utajifunza: Usakinishaji. Database yenye nguvu ya open-source. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "CREATE TABLE kozi(id SERIAL PRIMARY KEY, jina TEXT);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usakinishaji)."
   },
   {
    "title": "Tables",
    "body": "Katika somo hili la PostgreSQL utajifunza: Tables. Database yenye nguvu ya open-source. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "CREATE TABLE kozi(id SERIAL PRIMARY KEY, jina TEXT);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Tables)."
   },
   {
    "title": "Queries",
    "body": "Katika somo hili la PostgreSQL utajifunza: Queries. Database yenye nguvu ya open-source. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "CREATE TABLE kozi(id SERIAL PRIMARY KEY, jina TEXT);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Queries)."
   },
   {
    "title": "Indexes",
    "body": "Katika somo hili la PostgreSQL utajifunza: Indexes. Database yenye nguvu ya open-source. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "CREATE TABLE kozi(id SERIAL PRIMARY KEY, jina TEXT);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Indexes)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la PostgreSQL utajifunza: Project. Database yenye nguvu ya open-source. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "CREATE TABLE kozi(id SERIAL PRIMARY KEY, jina TEXT);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "excel",
  "title": "Excel",
  "description": "Kuchambua data kwa spreadsheets.",
  "long": "Kuchambua data kwa spreadsheets. Kozi hii ya Excel ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Formulas, Charts na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Excel utajifunza: Utangulizi. Kuchambua data kwa spreadsheets. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "=SUM(A1:A10)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Formulas",
    "body": "Katika somo hili la Excel utajifunza: Formulas. Kuchambua data kwa spreadsheets. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "=SUM(A1:A10)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Formulas)."
   },
   {
    "title": "Charts",
    "body": "Katika somo hili la Excel utajifunza: Charts. Kuchambua data kwa spreadsheets. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "=SUM(A1:A10)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Charts)."
   },
   {
    "title": "Pivot",
    "body": "Katika somo hili la Excel utajifunza: Pivot. Kuchambua data kwa spreadsheets. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "=SUM(A1:A10)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pivot)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Excel utajifunza: Project. Kuchambua data kwa spreadsheets. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "=SUM(A1:A10)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "power-bi",
  "title": "Power BI",
  "description": "Dashboards za biashara.",
  "long": "Dashboards za biashara. Kozi hii ya Power BI ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Data, Visuals na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Power BI utajifunza: Utangulizi. Dashboards za biashara. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Jumla = SUM(Mauzo[Kiasi])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Data",
    "body": "Katika somo hili la Power BI utajifunza: Data. Dashboards za biashara. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Jumla = SUM(Mauzo[Kiasi])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data)."
   },
   {
    "title": "Visuals",
    "body": "Katika somo hili la Power BI utajifunza: Visuals. Dashboards za biashara. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Jumla = SUM(Mauzo[Kiasi])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Visuals)."
   },
   {
    "title": "DAX",
    "body": "Katika somo hili la Power BI utajifunza: DAX. Dashboards za biashara. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Jumla = SUM(Mauzo[Kiasi])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (DAX)."
   },
   {
    "title": "Dashboard",
    "body": "Katika somo hili la Power BI utajifunza: Dashboard. Dashboards za biashara. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "Jumla = SUM(Mauzo[Kiasi])",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Dashboard)."
   }
  ]
 },
 {
  "slug": "tableau",
  "title": "Tableau",
  "description": "Visualization ya data.",
  "long": "Visualization ya data. Kozi hii ya Tableau ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Data, Charts na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Tableau utajifunza: Utangulizi. Visualization ya data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Drag Dimension kwenye Rows */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Data",
    "body": "Katika somo hili la Tableau utajifunza: Data. Visualization ya data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Drag Dimension kwenye Rows */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Data)."
   },
   {
    "title": "Charts",
    "body": "Katika somo hili la Tableau utajifunza: Charts. Visualization ya data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Drag Dimension kwenye Rows */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Charts)."
   },
   {
    "title": "Dashboards",
    "body": "Katika somo hili la Tableau utajifunza: Dashboards. Visualization ya data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Drag Dimension kwenye Rows */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Dashboards)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Tableau utajifunza: Project. Visualization ya data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* Drag Dimension kwenye Rows */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "cyber-security",
  "title": "Cyber Security",
  "description": "Kulinda mifumo na data.",
  "long": "Kulinda mifumo na data. Kozi hii ya Cyber Security ina masomo 5 ya vitendo, yakiwemo: Misingi, Vitisho, Passwords na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Misingi",
    "body": "Katika somo hili la Cyber Security utajifunza: Misingi. Kulinda mifumo na data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "import hashlib; hashlib.sha256(b\"pass\").hexdigest()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Misingi)."
   },
   {
    "title": "Vitisho",
    "body": "Katika somo hili la Cyber Security utajifunza: Vitisho. Kulinda mifumo na data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "import hashlib; hashlib.sha256(b\"pass\").hexdigest()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Vitisho)."
   },
   {
    "title": "Passwords",
    "body": "Katika somo hili la Cyber Security utajifunza: Passwords. Kulinda mifumo na data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "import hashlib; hashlib.sha256(b\"pass\").hexdigest()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Passwords)."
   },
   {
    "title": "Network Security",
    "body": "Katika somo hili la Cyber Security utajifunza: Network Security. Kulinda mifumo na data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "import hashlib; hashlib.sha256(b\"pass\").hexdigest()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Network Security)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Cyber Security utajifunza: Project. Kulinda mifumo na data. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "import hashlib; hashlib.sha256(b\"pass\").hexdigest()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "ethical-hacking",
  "title": "Ethical Hacking",
  "description": "Kupima usalama kihalali.",
  "long": "Kupima usalama kihalali. Kozi hii ya Ethical Hacking ina masomo 5 ya vitendo, yakiwemo: Maadili, Reconnaissance, Scanning na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Maadili",
    "body": "Katika somo hili la Ethical Hacking utajifunza: Maadili. Kupima usalama kihalali. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "nmap -sV 127.0.0.1",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Maadili)."
   },
   {
    "title": "Reconnaissance",
    "body": "Katika somo hili la Ethical Hacking utajifunza: Reconnaissance. Kupima usalama kihalali. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "nmap -sV 127.0.0.1",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Reconnaissance)."
   },
   {
    "title": "Scanning",
    "body": "Katika somo hili la Ethical Hacking utajifunza: Scanning. Kupima usalama kihalali. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "nmap -sV 127.0.0.1",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Scanning)."
   },
   {
    "title": "Ripoti",
    "body": "Katika somo hili la Ethical Hacking utajifunza: Ripoti. Kupima usalama kihalali. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "nmap -sV 127.0.0.1",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Ripoti)."
   },
   {
    "title": "Lab",
    "body": "Katika somo hili la Ethical Hacking utajifunza: Lab. Kupima usalama kihalali. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "nmap -sV 127.0.0.1",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Lab)."
   }
  ]
 },
 {
  "slug": "networking",
  "title": "Networking",
  "description": "Jinsi mitandao inavyofanya kazi.",
  "long": "Jinsi mitandao inavyofanya kazi. Kozi hii ya Networking ina masomo 5 ya vitendo, yakiwemo: IP, DNS, TCP/UDP na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "IP",
    "body": "Katika somo hili la Networking utajifunza: IP. Jinsi mitandao inavyofanya kazi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ping google.com",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (IP)."
   },
   {
    "title": "DNS",
    "body": "Katika somo hili la Networking utajifunza: DNS. Jinsi mitandao inavyofanya kazi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ping google.com",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (DNS)."
   },
   {
    "title": "TCP/UDP",
    "body": "Katika somo hili la Networking utajifunza: TCP/UDP. Jinsi mitandao inavyofanya kazi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ping google.com",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (TCP/UDP)."
   },
   {
    "title": "Routers",
    "body": "Katika somo hili la Networking utajifunza: Routers. Jinsi mitandao inavyofanya kazi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ping google.com",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Routers)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Networking utajifunza: Project. Jinsi mitandao inavyofanya kazi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ping google.com",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "linux",
  "title": "Linux",
  "description": "Mfumo endeshi wa servers.",
  "long": "Mfumo endeshi wa servers. Kozi hii ya Linux ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Commands, Permissions na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Linux utajifunza: Utangulizi. Mfumo endeshi wa servers. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ls -la",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Commands",
    "body": "Katika somo hili la Linux utajifunza: Commands. Mfumo endeshi wa servers. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ls -la",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Commands)."
   },
   {
    "title": "Permissions",
    "body": "Katika somo hili la Linux utajifunza: Permissions. Mfumo endeshi wa servers. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ls -la",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Permissions)."
   },
   {
    "title": "Packages",
    "body": "Katika somo hili la Linux utajifunza: Packages. Mfumo endeshi wa servers. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ls -la",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Packages)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Linux utajifunza: Project. Mfumo endeshi wa servers. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "ls -la",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "bash",
  "title": "Bash Scripting",
  "description": "Kuendesha kazi kwa scripts.",
  "long": "Kuendesha kazi kwa scripts. Kozi hii ya Bash Scripting ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Variables, Loops na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Bash Scripting utajifunza: Utangulizi. Kuendesha kazi kwa scripts. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "for f in *.txt; do echo $f; done",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Variables",
    "body": "Katika somo hili la Bash Scripting utajifunza: Variables. Kuendesha kazi kwa scripts. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "for f in *.txt; do echo $f; done",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Variables)."
   },
   {
    "title": "Loops",
    "body": "Katika somo hili la Bash Scripting utajifunza: Loops. Kuendesha kazi kwa scripts. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "for f in *.txt; do echo $f; done",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Loops)."
   },
   {
    "title": "Functions",
    "body": "Katika somo hili la Bash Scripting utajifunza: Functions. Kuendesha kazi kwa scripts. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "for f in *.txt; do echo $f; done",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Functions)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Bash Scripting utajifunza: Project. Kuendesha kazi kwa scripts. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "for f in *.txt; do echo $f; done",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "git",
  "title": "Git & GitHub",
  "description": "Kuhifadhi na kushirikiana code.",
  "long": "Kuhifadhi na kushirikiana code. Kozi hii ya Git & GitHub ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Commits, Branches na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Git & GitHub utajifunza: Utangulizi. Kuhifadhi na kushirikiana code. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "git commit -m \"Ujumbe\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Commits",
    "body": "Katika somo hili la Git & GitHub utajifunza: Commits. Kuhifadhi na kushirikiana code. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "git commit -m \"Ujumbe\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Commits)."
   },
   {
    "title": "Branches",
    "body": "Katika somo hili la Git & GitHub utajifunza: Branches. Kuhifadhi na kushirikiana code. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "git commit -m \"Ujumbe\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Branches)."
   },
   {
    "title": "Merge",
    "body": "Katika somo hili la Git & GitHub utajifunza: Merge. Kuhifadhi na kushirikiana code. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "git commit -m \"Ujumbe\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Merge)."
   },
   {
    "title": "GitHub",
    "body": "Katika somo hili la Git & GitHub utajifunza: GitHub. Kuhifadhi na kushirikiana code. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "git commit -m \"Ujumbe\"",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (GitHub)."
   }
  ]
 },
 {
  "slug": "docker",
  "title": "Docker",
  "description": "Containers za kusambaza apps.",
  "long": "Containers za kusambaza apps. Kozi hii ya Docker ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Images, Containers na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Docker utajifunza: Utangulizi. Containers za kusambaza apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "docker run -p 3000:3000 myapp",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Images",
    "body": "Katika somo hili la Docker utajifunza: Images. Containers za kusambaza apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "docker run -p 3000:3000 myapp",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Images)."
   },
   {
    "title": "Containers",
    "body": "Katika somo hili la Docker utajifunza: Containers. Containers za kusambaza apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "docker run -p 3000:3000 myapp",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Containers)."
   },
   {
    "title": "Compose",
    "body": "Katika somo hili la Docker utajifunza: Compose. Containers za kusambaza apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "docker run -p 3000:3000 myapp",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Compose)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Docker utajifunza: Project. Containers za kusambaza apps. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "docker run -p 3000:3000 myapp",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "kubernetes",
  "title": "Kubernetes",
  "description": "Kuendesha containers kwa wingi.",
  "long": "Kuendesha containers kwa wingi. Kozi hii ya Kubernetes ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Pods, Services na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Kubernetes utajifunza: Utangulizi. Kuendesha containers kwa wingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "kubectl get pods",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Pods",
    "body": "Katika somo hili la Kubernetes utajifunza: Pods. Kuendesha containers kwa wingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "kubectl get pods",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pods)."
   },
   {
    "title": "Services",
    "body": "Katika somo hili la Kubernetes utajifunza: Services. Kuendesha containers kwa wingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "kubectl get pods",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Services)."
   },
   {
    "title": "Deployments",
    "body": "Katika somo hili la Kubernetes utajifunza: Deployments. Kuendesha containers kwa wingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "kubectl get pods",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Deployments)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Kubernetes utajifunza: Project. Kuendesha containers kwa wingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "kubectl get pods",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "aws",
  "title": "AWS",
  "description": "Cloud ya Amazon.",
  "long": "Cloud ya Amazon. Kozi hii ya AWS ina masomo 5 ya vitendo, yakiwemo: Utangulizi, EC2, S3 na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la AWS utajifunza: Utangulizi. Cloud ya Amazon. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "aws s3 ls",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "EC2",
    "body": "Katika somo hili la AWS utajifunza: EC2. Cloud ya Amazon. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "aws s3 ls",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (EC2)."
   },
   {
    "title": "S3",
    "body": "Katika somo hili la AWS utajifunza: S3. Cloud ya Amazon. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "aws s3 ls",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (S3)."
   },
   {
    "title": "IAM",
    "body": "Katika somo hili la AWS utajifunza: IAM. Cloud ya Amazon. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "aws s3 ls",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (IAM)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la AWS utajifunza: Project. Cloud ya Amazon. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "aws s3 ls",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "azure",
  "title": "Microsoft Azure",
  "description": "Cloud ya Microsoft.",
  "long": "Cloud ya Microsoft. Kozi hii ya Microsoft Azure ina masomo 5 ya vitendo, yakiwemo: Utangulizi, VMs, Storage na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Microsoft Azure utajifunza: Utangulizi. Cloud ya Microsoft. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "az group list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "VMs",
    "body": "Katika somo hili la Microsoft Azure utajifunza: VMs. Cloud ya Microsoft. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "az group list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (VMs)."
   },
   {
    "title": "Storage",
    "body": "Katika somo hili la Microsoft Azure utajifunza: Storage. Cloud ya Microsoft. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "az group list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Storage)."
   },
   {
    "title": "App Service",
    "body": "Katika somo hili la Microsoft Azure utajifunza: App Service. Cloud ya Microsoft. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "az group list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (App Service)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Microsoft Azure utajifunza: Project. Cloud ya Microsoft. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "az group list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "gcp",
  "title": "Google Cloud",
  "description": "Cloud ya Google.",
  "long": "Cloud ya Google. Kozi hii ya Google Cloud ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Compute, Storage na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Google Cloud utajifunza: Utangulizi. Cloud ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "gcloud projects list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Compute",
    "body": "Katika somo hili la Google Cloud utajifunza: Compute. Cloud ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "gcloud projects list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Compute)."
   },
   {
    "title": "Storage",
    "body": "Katika somo hili la Google Cloud utajifunza: Storage. Cloud ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "gcloud projects list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Storage)."
   },
   {
    "title": "Cloud Run",
    "body": "Katika somo hili la Google Cloud utajifunza: Cloud Run. Cloud ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "gcloud projects list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Cloud Run)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Google Cloud utajifunza: Project. Cloud ya Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "gcloud projects list",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "devops",
  "title": "DevOps",
  "description": "Kuunganisha development na operations.",
  "long": "Kuunganisha development na operations. Kozi hii ya DevOps ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Automation, Monitoring na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la DevOps utajifunza: Utangulizi. Kuunganisha development na operations. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "terraform plan",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Automation",
    "body": "Katika somo hili la DevOps utajifunza: Automation. Kuunganisha development na operations. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "terraform plan",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Automation)."
   },
   {
    "title": "Monitoring",
    "body": "Katika somo hili la DevOps utajifunza: Monitoring. Kuunganisha development na operations. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "terraform plan",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Monitoring)."
   },
   {
    "title": "Infra as Code",
    "body": "Katika somo hili la DevOps utajifunza: Infra as Code. Kuunganisha development na operations. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "terraform plan",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Infra as Code)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la DevOps utajifunza: Project. Kuunganisha development na operations. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "terraform plan",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "cicd",
  "title": "CI/CD",
  "description": "Kujaribu na kusambaza code kiotomatiki.",
  "long": "Kujaribu na kusambaza code kiotomatiki. Kozi hii ya CI/CD ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Pipelines, Tests na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la CI/CD utajifunza: Utangulizi. Kujaribu na kusambaza code kiotomatiki. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "on: [push]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Pipelines",
    "body": "Katika somo hili la CI/CD utajifunza: Pipelines. Kujaribu na kusambaza code kiotomatiki. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "on: [push]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Pipelines)."
   },
   {
    "title": "Tests",
    "body": "Katika somo hili la CI/CD utajifunza: Tests. Kujaribu na kusambaza code kiotomatiki. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "on: [push]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Tests)."
   },
   {
    "title": "Deploy",
    "body": "Katika somo hili la CI/CD utajifunza: Deploy. Kujaribu na kusambaza code kiotomatiki. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "on: [push]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Deploy)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la CI/CD utajifunza: Project. Kujaribu na kusambaza code kiotomatiki. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "on: [push]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "api-design",
  "title": "API Design",
  "description": "Kubuni REST APIs bora.",
  "long": "Kubuni REST APIs bora. Kozi hii ya API Design ina masomo 5 ya vitendo, yakiwemo: REST, Endpoints, Status Codes na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "REST",
    "body": "Katika somo hili la API Design utajifunza: REST. Kubuni REST APIs bora. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GET /api/kozi",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (REST)."
   },
   {
    "title": "Endpoints",
    "body": "Katika somo hili la API Design utajifunza: Endpoints. Kubuni REST APIs bora. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GET /api/kozi",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Endpoints)."
   },
   {
    "title": "Status Codes",
    "body": "Katika somo hili la API Design utajifunza: Status Codes. Kubuni REST APIs bora. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GET /api/kozi",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Status Codes)."
   },
   {
    "title": "Auth",
    "body": "Katika somo hili la API Design utajifunza: Auth. Kubuni REST APIs bora. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GET /api/kozi",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Auth)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la API Design utajifunza: Project. Kubuni REST APIs bora. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GET /api/kozi",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "graphql",
  "title": "GraphQL",
  "description": "Lugha ya kuuliza APIs.",
  "long": "Lugha ya kuuliza APIs. Kozi hii ya GraphQL ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Schema, Queries na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la GraphQL utajifunza: Utangulizi. Lugha ya kuuliza APIs. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "{ kozi { jina } }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Schema",
    "body": "Katika somo hili la GraphQL utajifunza: Schema. Lugha ya kuuliza APIs. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "{ kozi { jina } }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Schema)."
   },
   {
    "title": "Queries",
    "body": "Katika somo hili la GraphQL utajifunza: Queries. Lugha ya kuuliza APIs. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "{ kozi { jina } }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Queries)."
   },
   {
    "title": "Mutations",
    "body": "Katika somo hili la GraphQL utajifunza: Mutations. Lugha ya kuuliza APIs. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "{ kozi { jina } }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Mutations)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la GraphQL utajifunza: Project. Lugha ya kuuliza APIs. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "{ kozi { jina } }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "django",
  "title": "Django",
  "description": "Framework kamili ya Python.",
  "long": "Framework kamili ya Python. Kozi hii ya Django ina masomo 5 ya vitendo, yakiwemo: Usakinishaji, Models, Views na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Usakinishaji",
    "body": "Katika somo hili la Django utajifunza: Usakinishaji. Framework kamili ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "python manage.py runserver",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usakinishaji)."
   },
   {
    "title": "Models",
    "body": "Katika somo hili la Django utajifunza: Models. Framework kamili ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "python manage.py runserver",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Models)."
   },
   {
    "title": "Views",
    "body": "Katika somo hili la Django utajifunza: Views. Framework kamili ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "python manage.py runserver",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Views)."
   },
   {
    "title": "Templates",
    "body": "Katika somo hili la Django utajifunza: Templates. Framework kamili ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "python manage.py runserver",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Templates)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Django utajifunza: Project. Framework kamili ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "python manage.py runserver",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "fastapi",
  "title": "FastAPI",
  "description": "APIs za kasi kwa Python.",
  "long": "APIs za kasi kwa Python. Kozi hii ya FastAPI ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Routes, Validation na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la FastAPI utajifunza: Utangulizi. APIs za kasi kwa Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.get(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Routes",
    "body": "Katika somo hili la FastAPI utajifunza: Routes. APIs za kasi kwa Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.get(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Routes)."
   },
   {
    "title": "Validation",
    "body": "Katika somo hili la FastAPI utajifunza: Validation. APIs za kasi kwa Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.get(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Validation)."
   },
   {
    "title": "Database",
    "body": "Katika somo hili la FastAPI utajifunza: Database. APIs za kasi kwa Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.get(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Database)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la FastAPI utajifunza: Project. APIs za kasi kwa Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.get(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "flask",
  "title": "Flask",
  "description": "Framework nyepesi ya Python.",
  "long": "Framework nyepesi ya Python. Kozi hii ya Flask ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Routes, Templates na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Flask utajifunza: Utangulizi. Framework nyepesi ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.route(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Routes",
    "body": "Katika somo hili la Flask utajifunza: Routes. Framework nyepesi ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.route(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Routes)."
   },
   {
    "title": "Templates",
    "body": "Katika somo hili la Flask utajifunza: Templates. Framework nyepesi ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.route(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Templates)."
   },
   {
    "title": "Forms",
    "body": "Katika somo hili la Flask utajifunza: Forms. Framework nyepesi ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.route(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Forms)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Flask utajifunza: Project. Framework nyepesi ya Python. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@app.route(\"/\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "spring-boot",
  "title": "Spring Boot",
  "description": "Backend ya Java.",
  "long": "Backend ya Java. Kozi hii ya Spring Boot ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Controllers, JPA na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Spring Boot utajifunza: Utangulizi. Backend ya Java. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@RestController",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Controllers",
    "body": "Katika somo hili la Spring Boot utajifunza: Controllers. Backend ya Java. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@RestController",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Controllers)."
   },
   {
    "title": "JPA",
    "body": "Katika somo hili la Spring Boot utajifunza: JPA. Backend ya Java. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@RestController",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (JPA)."
   },
   {
    "title": "Security",
    "body": "Katika somo hili la Spring Boot utajifunza: Security. Backend ya Java. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@RestController",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Security)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Spring Boot utajifunza: Project. Backend ya Java. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "@RestController",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "wordpress",
  "title": "WordPress",
  "description": "Kujenga tovuti bila code nyingi.",
  "long": "Kujenga tovuti bila code nyingi. Kozi hii ya WordPress ina masomo 5 ya vitendo, yakiwemo: Usakinishaji, Themes, Plugins na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Usakinishaji",
    "body": "Katika somo hili la WordPress utajifunza: Usakinishaji. Kujenga tovuti bila code nyingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "[gallery]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usakinishaji)."
   },
   {
    "title": "Themes",
    "body": "Katika somo hili la WordPress utajifunza: Themes. Kujenga tovuti bila code nyingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "[gallery]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Themes)."
   },
   {
    "title": "Plugins",
    "body": "Katika somo hili la WordPress utajifunza: Plugins. Kujenga tovuti bila code nyingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "[gallery]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Plugins)."
   },
   {
    "title": "Posts",
    "body": "Katika somo hili la WordPress utajifunza: Posts. Kujenga tovuti bila code nyingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "[gallery]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Posts)."
   },
   {
    "title": "Tovuti",
    "body": "Katika somo hili la WordPress utajifunza: Tovuti. Kujenga tovuti bila code nyingi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "[gallery]",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Tovuti)."
   }
  ]
 },
 {
  "slug": "seo",
  "title": "SEO",
  "description": "Kupanda kwenye Google.",
  "long": "Kupanda kwenye Google. Kozi hii ya SEO ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Keywords, On-Page na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la SEO utajifunza: Utangulizi. Kupanda kwenye Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<meta name=\"description\" content=\"...\">",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Keywords",
    "body": "Katika somo hili la SEO utajifunza: Keywords. Kupanda kwenye Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<meta name=\"description\" content=\"...\">",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Keywords)."
   },
   {
    "title": "On-Page",
    "body": "Katika somo hili la SEO utajifunza: On-Page. Kupanda kwenye Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<meta name=\"description\" content=\"...\">",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (On-Page)."
   },
   {
    "title": "Links",
    "body": "Katika somo hili la SEO utajifunza: Links. Kupanda kwenye Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<meta name=\"description\" content=\"...\">",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Links)."
   },
   {
    "title": "Ripoti",
    "body": "Katika somo hili la SEO utajifunza: Ripoti. Kupanda kwenye Google. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "<meta name=\"description\" content=\"...\">",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Ripoti)."
   }
  ]
 },
 {
  "slug": "digital-marketing",
  "title": "Digital Marketing",
  "description": "Kutangaza biashara mtandaoni.",
  "long": "Kutangaza biashara mtandaoni. Kozi hii ya Digital Marketing ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Social Media, Email na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Digital Marketing utajifunza: Utangulizi. Kutangaza biashara mtandaoni. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* CTR = clicks / impressions */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Social Media",
    "body": "Katika somo hili la Digital Marketing utajifunza: Social Media. Kutangaza biashara mtandaoni. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* CTR = clicks / impressions */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Social Media)."
   },
   {
    "title": "Email",
    "body": "Katika somo hili la Digital Marketing utajifunza: Email. Kutangaza biashara mtandaoni. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* CTR = clicks / impressions */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Email)."
   },
   {
    "title": "Ads",
    "body": "Katika somo hili la Digital Marketing utajifunza: Ads. Kutangaza biashara mtandaoni. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* CTR = clicks / impressions */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Ads)."
   },
   {
    "title": "Mpango",
    "body": "Katika somo hili la Digital Marketing utajifunza: Mpango. Kutangaza biashara mtandaoni. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* CTR = clicks / impressions */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Mpango)."
   }
  ]
 },
 {
  "slug": "blockchain",
  "title": "Blockchain",
  "description": "Teknolojia ya rekodi zisizobadilika.",
  "long": "Teknolojia ya rekodi zisizobadilika. Kozi hii ya Blockchain ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Blocks, Consensus na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Blockchain utajifunza: Utangulizi. Teknolojia ya rekodi zisizobadilika. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "hash = sha256(prev + data)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Blocks",
    "body": "Katika somo hili la Blockchain utajifunza: Blocks. Teknolojia ya rekodi zisizobadilika. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "hash = sha256(prev + data)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Blocks)."
   },
   {
    "title": "Consensus",
    "body": "Katika somo hili la Blockchain utajifunza: Consensus. Teknolojia ya rekodi zisizobadilika. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "hash = sha256(prev + data)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Consensus)."
   },
   {
    "title": "Wallets",
    "body": "Katika somo hili la Blockchain utajifunza: Wallets. Teknolojia ya rekodi zisizobadilika. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "hash = sha256(prev + data)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Wallets)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Blockchain utajifunza: Project. Teknolojia ya rekodi zisizobadilika. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "hash = sha256(prev + data)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "solidity",
  "title": "Solidity",
  "description": "Smart contracts za Ethereum.",
  "long": "Smart contracts za Ethereum. Kozi hii ya Solidity ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Types, Functions na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Solidity utajifunza: Utangulizi. Smart contracts za Ethereum. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "contract Hi { string public s = \"Habari\"; }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Types",
    "body": "Katika somo hili la Solidity utajifunza: Types. Smart contracts za Ethereum. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "contract Hi { string public s = \"Habari\"; }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Types)."
   },
   {
    "title": "Functions",
    "body": "Katika somo hili la Solidity utajifunza: Functions. Smart contracts za Ethereum. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "contract Hi { string public s = \"Habari\"; }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Functions)."
   },
   {
    "title": "Events",
    "body": "Katika somo hili la Solidity utajifunza: Events. Smart contracts za Ethereum. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "contract Hi { string public s = \"Habari\"; }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Events)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Solidity utajifunza: Project. Smart contracts za Ethereum. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "contract Hi { string public s = \"Habari\"; }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "game-dev",
  "title": "Game Development",
  "description": "Kutengeneza michezo.",
  "long": "Kutengeneza michezo. Kozi hii ya Game Development ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Game Loop, Physics na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Game Development utajifunza: Utangulizi. Kutengeneza michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "while running: update(); draw()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Game Loop",
    "body": "Katika somo hili la Game Development utajifunza: Game Loop. Kutengeneza michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "while running: update(); draw()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Game Loop)."
   },
   {
    "title": "Physics",
    "body": "Katika somo hili la Game Development utajifunza: Physics. Kutengeneza michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "while running: update(); draw()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Physics)."
   },
   {
    "title": "Sprites",
    "body": "Katika somo hili la Game Development utajifunza: Sprites. Kutengeneza michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "while running: update(); draw()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Sprites)."
   },
   {
    "title": "Mchezo",
    "body": "Katika somo hili la Game Development utajifunza: Mchezo. Kutengeneza michezo. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "while running: update(); draw()",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Mchezo)."
   }
  ]
 },
 {
  "slug": "unity",
  "title": "Unity",
  "description": "Injini ya michezo ya 2D/3D.",
  "long": "Injini ya michezo ya 2D/3D. Kozi hii ya Unity ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Scenes, Scripts na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Unity utajifunza: Utangulizi. Injini ya michezo ya 2D/3D. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "void Update(){ transform.Translate(0,0,1); }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Scenes",
    "body": "Katika somo hili la Unity utajifunza: Scenes. Injini ya michezo ya 2D/3D. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "void Update(){ transform.Translate(0,0,1); }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Scenes)."
   },
   {
    "title": "Scripts",
    "body": "Katika somo hili la Unity utajifunza: Scripts. Injini ya michezo ya 2D/3D. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "void Update(){ transform.Translate(0,0,1); }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Scripts)."
   },
   {
    "title": "Physics",
    "body": "Katika somo hili la Unity utajifunza: Physics. Injini ya michezo ya 2D/3D. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "void Update(){ transform.Translate(0,0,1); }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Physics)."
   },
   {
    "title": "Mchezo",
    "body": "Katika somo hili la Unity utajifunza: Mchezo. Injini ya michezo ya 2D/3D. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "void Update(){ transform.Translate(0,0,1); }",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Mchezo)."
   }
  ]
 },
 {
  "slug": "iot",
  "title": "IoT",
  "description": "Vifaa vilivyounganishwa na mtandao.",
  "long": "Vifaa vilivyounganishwa na mtandao. Kozi hii ya IoT ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Sensors, MQTT na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la IoT utajifunza: Utangulizi. Vifaa vilivyounganishwa na mtandao. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "client.publish(\"joto\", \"25\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Sensors",
    "body": "Katika somo hili la IoT utajifunza: Sensors. Vifaa vilivyounganishwa na mtandao. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "client.publish(\"joto\", \"25\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Sensors)."
   },
   {
    "title": "MQTT",
    "body": "Katika somo hili la IoT utajifunza: MQTT. Vifaa vilivyounganishwa na mtandao. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "client.publish(\"joto\", \"25\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (MQTT)."
   },
   {
    "title": "Cloud",
    "body": "Katika somo hili la IoT utajifunza: Cloud. Vifaa vilivyounganishwa na mtandao. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "client.publish(\"joto\", \"25\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Cloud)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la IoT utajifunza: Project. Vifaa vilivyounganishwa na mtandao. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "client.publish(\"joto\", \"25\")",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "arduino",
  "title": "Arduino",
  "description": "Elektroniki na programu.",
  "long": "Elektroniki na programu. Kozi hii ya Arduino ina masomo 5 ya vitendo, yakiwemo: Utangulizi, LEDs, Sensors na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Arduino utajifunza: Utangulizi. Elektroniki na programu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "digitalWrite(13, HIGH);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "LEDs",
    "body": "Katika somo hili la Arduino utajifunza: LEDs. Elektroniki na programu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "digitalWrite(13, HIGH);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (LEDs)."
   },
   {
    "title": "Sensors",
    "body": "Katika somo hili la Arduino utajifunza: Sensors. Elektroniki na programu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "digitalWrite(13, HIGH);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Sensors)."
   },
   {
    "title": "Motors",
    "body": "Katika somo hili la Arduino utajifunza: Motors. Elektroniki na programu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "digitalWrite(13, HIGH);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Motors)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Arduino utajifunza: Project. Elektroniki na programu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "digitalWrite(13, HIGH);",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "raspberry-pi",
  "title": "Raspberry Pi",
  "description": "Kompyuta ndogo kwa miradi.",
  "long": "Kompyuta ndogo kwa miradi. Kozi hii ya Raspberry Pi ina masomo 5 ya vitendo, yakiwemo: Usakinishaji, GPIO, Python na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Usakinishaji",
    "body": "Katika somo hili la Raspberry Pi utajifunza: Usakinishaji. Kompyuta ndogo kwa miradi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GPIO.output(18, True)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usakinishaji)."
   },
   {
    "title": "GPIO",
    "body": "Katika somo hili la Raspberry Pi utajifunza: GPIO. Kompyuta ndogo kwa miradi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GPIO.output(18, True)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (GPIO)."
   },
   {
    "title": "Python",
    "body": "Katika somo hili la Raspberry Pi utajifunza: Python. Kompyuta ndogo kwa miradi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GPIO.output(18, True)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Python)."
   },
   {
    "title": "Sensors",
    "body": "Katika somo hili la Raspberry Pi utajifunza: Sensors. Kompyuta ndogo kwa miradi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GPIO.output(18, True)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Sensors)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Raspberry Pi utajifunza: Project. Kompyuta ndogo kwa miradi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "GPIO.output(18, True)",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "cloud-computing",
  "title": "Cloud Computing",
  "description": "Misingi ya cloud.",
  "long": "Misingi ya cloud. Kozi hii ya Cloud Computing ina masomo 5 ya vitendo, yakiwemo: Utangulizi, IaaS/PaaS/SaaS, Storage na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Cloud Computing utajifunza: Utangulizi. Misingi ya cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* IaaS=VM, PaaS=Vercel, SaaS=Gmail */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "IaaS/PaaS/SaaS",
    "body": "Katika somo hili la Cloud Computing utajifunza: IaaS/PaaS/SaaS. Misingi ya cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* IaaS=VM, PaaS=Vercel, SaaS=Gmail */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (IaaS/PaaS/SaaS)."
   },
   {
    "title": "Storage",
    "body": "Katika somo hili la Cloud Computing utajifunza: Storage. Misingi ya cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* IaaS=VM, PaaS=Vercel, SaaS=Gmail */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Storage)."
   },
   {
    "title": "Usalama",
    "body": "Katika somo hili la Cloud Computing utajifunza: Usalama. Misingi ya cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* IaaS=VM, PaaS=Vercel, SaaS=Gmail */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Usalama)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Cloud Computing utajifunza: Project. Misingi ya cloud. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "/* IaaS=VM, PaaS=Vercel, SaaS=Gmail */",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "software-testing",
  "title": "Software Testing",
  "description": "Kujaribu programu kuzuia hitilafu.",
  "long": "Kujaribu programu kuzuia hitilafu. Kozi hii ya Software Testing ina masomo 5 ya vitendo, yakiwemo: Utangulizi, Unit Tests, Integration na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Utangulizi",
    "body": "Katika somo hili la Software Testing utajifunza: Utangulizi. Kujaribu programu kuzuia hitilafu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "assert add(2,3) == 5",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Utangulizi)."
   },
   {
    "title": "Unit Tests",
    "body": "Katika somo hili la Software Testing utajifunza: Unit Tests. Kujaribu programu kuzuia hitilafu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "assert add(2,3) == 5",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Unit Tests)."
   },
   {
    "title": "Integration",
    "body": "Katika somo hili la Software Testing utajifunza: Integration. Kujaribu programu kuzuia hitilafu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "assert add(2,3) == 5",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Integration)."
   },
   {
    "title": "Automation",
    "body": "Katika somo hili la Software Testing utajifunza: Automation. Kujaribu programu kuzuia hitilafu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "assert add(2,3) == 5",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Automation)."
   },
   {
    "title": "Project",
    "body": "Katika somo hili la Software Testing utajifunza: Project. Kujaribu programu kuzuia hitilafu. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "assert add(2,3) == 5",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Project)."
   }
  ]
 },
 {
  "slug": "algorithms",
  "title": "Algorithms & Data Structures",
  "description": "Kutatua matatizo kwa ufanisi.",
  "long": "Kutatua matatizo kwa ufanisi. Kozi hii ya Algorithms & Data Structures ina masomo 5 ya vitendo, yakiwemo: Complexity, Arrays, Sorting na zaidi. Ni BURE kabisa na unaweza kujifunza wakati wowote, 24/7.",
  "lessons": [
   {
    "title": "Complexity",
    "body": "Katika somo hili la Algorithms & Data Structures utajifunza: Complexity. Kutatua matatizo kwa ufanisi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "def binary_search(a,x): ...",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Complexity)."
   },
   {
    "title": "Arrays",
    "body": "Katika somo hili la Algorithms & Data Structures utajifunza: Arrays. Kutatua matatizo kwa ufanisi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "def binary_search(a,x): ...",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Arrays)."
   },
   {
    "title": "Sorting",
    "body": "Katika somo hili la Algorithms & Data Structures utajifunza: Sorting. Kutatua matatizo kwa ufanisi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "def binary_search(a,x): ...",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Sorting)."
   },
   {
    "title": "Searching",
    "body": "Katika somo hili la Algorithms & Data Structures utajifunza: Searching. Kutatua matatizo kwa ufanisi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "def binary_search(a,x): ...",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Searching)."
   },
   {
    "title": "Trees",
    "body": "Katika somo hili la Algorithms & Data Structures utajifunza: Trees. Kutatua matatizo kwa ufanisi. Soma mfano wa code hapa chini, uuandike mwenyewe kwenye kompyuta yako, kisha ufanye zoezi.",
    "code": "def binary_search(a,x): ...",
    "task": "Andika upya mfano huu kwa maneno yako mwenyewe na ujaribu kubadilisha sehemu moja kuona matokeo (Trees)."
   }
  ]
 }
];
