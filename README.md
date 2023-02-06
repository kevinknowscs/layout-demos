# Template Usage

This project was created using the dotnet project template infrastructure,
and the react+vite template written by Kevin Dietz.

## Installing with JavaScript

Run:

```
dotnet new react+vite -o Your_Output_Folder
```

This sets up the project for JavaScript/JSX files without TypeScript support. It
is equivalent to running:

```
# Same effect as above
dotnet new react+vite -o Your_Output_Folder --use-typescript false
```

## Installing with TypeScript

To enable TypeScript/TSX support in the file, specify the --use-typescript parameter
as true.

```
dotnet new react+vite -o Your_Output_Folder --use-typescript true
```

# Introduction

This starter project uses React alongside the package manager Vite.

For more information on Vite, visit:

https://vitejs.dev/

# Running the Application

* Run ```npm install``` Note: The template prompts you to run this when creating the project
* Run ```npm run dev``` to start the development server
* Run ```npm run build``` to build the distribution

# Opening the Application

Navigate your browser to:

```
http://127.0.0.1:5000
```

# Adding TypeScript Support Later

If you created this project without TypeScript support and wish to add TypeScript support
after-the-fact, do the following steps:

1. Add tsconfig.json to the root folder. Add the following content to it. Modify as needed.

```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "allowJs": true,
        "checkJs": false,
        "jsx": "react",
        "outDir": "./build",
        "rootDir": "./",
        "removeComments": true,
        "noEmit": true,
        "pretty": true,
        "skipLibCheck": true,
        "strict": true,
        "moduleResolution": "node",
        "esModuleInterop": true
    },
    "include": [
        "src", "./custom.d.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

2. Add custom.d.json to the root folder. Add the following content. Modify as needed.

```
declare module "*.svg" {
    // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const content: string;
    export default content;
  }
```

3. Create new React components with ".tsx" extensions instead of ".jsx". You can
   mix-and-match components of both extension types.
   