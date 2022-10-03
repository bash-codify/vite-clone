const guide = [
    {
        id: 1,
        title: 'Why Vite',
        whyvite: [{

        problem:[{
        title: 'The problems',
        desc: ` Before ES modules were available in browsers, developers had no native mechanism for authoring JavaScript in a modularized fashion. This is why we are all familiar with the concept of "bundling": using tools that crawl, process and concatenate our source modules into files that can run in the browser.

        Over time we have seen tools like webpack, Rollup and Parcel, which greatly improved the development experience for frontend developers.
        
        However, as we build more and more ambitious applications, the amount of JavaScript we are dealing with is also increasing dramatically. It is not uncommon for large scale projects to contain thousands of modules. We are starting to hit a performance bottleneck for JavaScript based tooling: it can often take an unreasonably long wait (sometimes up to minutes!) to spin up a dev server, and even with Hot Module Replacement (HMR), file edits can take a couple of seconds to be reflected in the browser. The slow feedback loop can greatly affect developers' productivity and happiness.
        
        Vite aims to address these issues by leveraging new advancements in the ecosystem: the availability of native ES modules in the browser, and the rise of JavaScript tools written in compile-to-native languages.`,
        }],

        slowserver: [{
            title: 'Slow Server Start',
            desc: `When cold-starting the dev server, a bundler-based build setup has to eagerly crawl and build your entire application before it can be served.

            Vite improves the dev server start time by first dividing the modules in an application into two categories: dependencies and source code.`,
            list: [`${<strong>Dependencies</strong>} are mostly plain JavaScript that do not change often during development. Some large dependencies (e.g. component libraries with hundreds of modules) are also quite expensive to process. Dependencies may also be shipped in various module formats (e.g. ESM or CommonJS).
            ${' '}
            ite pre-bundles dependencies using esbuild. esbuild is written in Go and pre-bundles dependencies 10-100x faster than JavaScript-based bundlers.
            `,
             `Source code often contains non-plain JavaScript that needs transforming (e.g. JSX, CSS or Vue/Svelte components), and will be edited very often. Also, not all source code needs to be loaded at the same time (e.g. with route-based code-splitting).

            Vite serves source code over native ESM. This is essentially letting the browser take over part of the job of a bundler: Vite only needs to transform and serve source code on demand, as the browser requests it. Code behind conditional dynamic imports is only processed if actually used on the current screen.`],

            img: ['./', './'],
        }],

        slowupdate:[{


            title: 'Slow Updates',
            desc:  `When a file is edited in a bundler-based build setup, it is inefficient to rebuild the whole bundle for obvious reasons: the update speed will degrade linearly with the size of the app.
    
            In some bundlers, the dev server runs the bundling in memory so that it only needs to invalidate part of its module graph when a file changes, but it still needs to re-construct the entire bundle and reload the web page. Reconstructing the bundle can be expensive, and reloading the page blows away the current state of the application. This is why some bundlers support Hot Module Replacement (HMR): allowing a module to "hot replace" itself without affecting the rest of the page. This greatly improves DX - however, in practice we've found that even HMR update speed deteriorates significantly as the size of the application grows.
            
            In Vite, HMR is performed over native ESM. When a file is edited, Vite only needs to precisely invalidate the chain between the edited module and its closest HMR boundary (most of the time only the module itself), making HMR updates consistently fast regardless of the size of your application.
            
            Vite also leverages HTTP headers to speed up full page reloads (again, let the browser do more work for us): source code module requests are made conditional via 304 Not Modified, and dependency module requests are strongly cached via Cache-Control: max-age=31536000,immutable so they don't hit the server again once cached.
            
            Once you experience how fast Vite is, we highly doubt you'd be willing to put up with bundled development again.`,


        }],

        

        production:[{
            title: 'Why Bundle for Production',
            desc: `Even though native ESM is now widely supported, shipping unbundled ESM in production is still inefficient (even with HTTP/2) due to the additional network round trips caused by nested imports. To get the optimal loading performance in production, it is still better to bundle your code with tree-shaking, lazy-loading and common chunk splitting (for better caching).

            Ensuring optimal output and behavioral consistency between the dev server and the production build isn't easy. This is why Vite ships with a pre-configured build command that bakes in many performance optimizations out of the box.`,
        }],

       esbuild:[{
            title: 'WWhy Not Bundle with esbuild?',
            desc: `Even though native ESM is now widely supported, shipping unbundled ESM in production is still inefficient (even with HTTP/2) due to the additional network round trips caused by nested imports. To get the optimal loading performance in production, it is still better to bundle your code with tree-shaking, lazy-loading and common chunk splitting (for better caching).

            Ensuring optimal output and behavioral consistency between the dev server and the production build isn't easy. This is why Vite ships with a pre-configured build command that bakes in many performance optimizations out of the box.`,
        }],

        differe:[{
            title: 'How is Vite Different from X?',
            desc: `You can check out the Comparisons section for more details on how Vite differs from other similar tools.`,
        }],



        }]


    },


    {
        id: 2,
        title: 'Getting Started',
        getstarted: [{
        overview:[{
        title: 'Overview',
        desc: ` Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:`,

        list: [`A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).`,
        
         `A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.`],
        
        para: `Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its Plugin API and JavaScript API with full typing support.
        
        You can learn more about the rationale behind the project in the Why Vite section.`,

        }],

        browser: [{
            
            title: 'Browser Support',
            desc: `The default build targets browsers that support native ES Modules, native ESM dynamic import, and import.meta. Legacy browsers can be supported via the official @vitejs/plugin-legacy - see the Building for Production section for more details.`

        }],

      
        tryingvite:[{

            title: 'Trying Vite Online',
            desc:  `You can try Vite online on StackBlitz. It runs the Vite-based build setup directly in the browser, so it is almost identical to the local setup but doesn't require installing anything on your machine. You can navigate to vite.new/{template} to select which framework to use.`,

        }],

        

        template:[{
            title: 'Community Templates',
            desc: `create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for community maintained templates that include other tools or target different frameworks. You can use a tool like degit to scaffold your project with one of the templates.`,
        }],

        projectroot:[{
            title: 'index.html and Project Root',
            desc: `One thing you may have noticed is that in a Vite project, index.html is front-and-central instead of being tucked away inside public. This is intentional: during development Vite is a server, and index.html is the entry point to your application.

            Vite treats index.html as source code and part of the module graph. It resolves <script type="module" src="..."> that references your JavaScript source code. Even inline <script type="module"> and CSS referenced via <link href> also enjoy Vite-specific features. In addition, URLs inside index.html are automatically rebased so there's no need for special %PUBLIC_URL% placeholders.
            ${br}
            Similar to static http servers, Vite has the concept of a "root directory" which your files are served from. You will see it referenced as <root> throughout the rest of the docs. Absolute URLs in your source code will be resolved using the project root as base, so you can write code as if you are working with a normal static file server (except way more powerful!). Vite is also capable of handling dependencies that resolve to out-of-root file system locations, which makes it usable even in a monorepo-based setup.
            ${br}
            Vite also supports multi-page apps with multiple .html entry points.`,


            alternative:[{
                title: 'Specifying Alternative Root',
                desc: `Running vite starts the dev server using the current working directory as root. You can specify an alternative root with vite serve some/sub/dir.`
            }]
        }],

     
        commandline:[{
            title: 'Command Line Interface',
            desc: `In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with npx vite. Here are the default npm scripts in a scaffolded Vite project:`,
        }],

        unreleased:[{
            title: 'Using Unreleased Commits',
            desc: `If you can't wait for a new release to test the latest features, you will need to clone the vite repo to your local machine and then build and link it yourself (pnpm is required):`,
            para: `Then go to your Vite based project and run pnpm link --global vite (or the package manager that you used to link vite globally). Now restart the development server to ride on the bleeding edge!`
        }],

        community:[{
            title: 'Community',
            desc: `If you have questions or need help, reach out to the community at Discord and GitHub Discussions.`,
        }],

        }]

    },

    {
        id: 3,
        title: 'Features',
        desc: ` At the very basic level, developing using Vite is not that much different from using a static file server. However, Vite provides many enhancements over native ESM imports to support various features that are typically seen in bundler-based setups. `,

        features:[{
        prebuilding: [{
        title: 'NPM Dependency Resolving and Pre-Bundling',
        desc: ` Native ES imports do not support bare module imports like the following:`,

        list: [`Pre-bundle them to improve page loading speed and convert CommonJS / UMD modules to ESM. The pre-bundling step is performed with esbuild and makes Vite's cold start time significantly faster than any JavaScript-based bundler.`,
        
         `Rewrite the imports to valid URLs like /node_modules/.vite/deps/my-dep.js?v=f3sf2ebd so that the browser can import them properly.`],
        
        para: `Vite caches dependency requests via HTTP headers, so if you wish to locally edit/debug a dependency, follow the steps here.`,

        }],

        hotmodule: [{
            
            title: 'Hot Module Replacement',
            desc: `Vite provides an HMR API over native ESM. Frameworks with HMR capabilities can leverage the API to provide instant, precise updates without reloading the page or blowing away application state. Vite provides first-party HMR integrations for Vue Single File Components and React Fast Refresh. There are also official integrations for Preact via @prefresh/vite.

            Note you don't need to manually set these up - when you create an app via create-vite, the selected templates would have these pre-configured for you already.`

        }],

      
        typescript:[{

            title: 'TypeScript',
            desc:  `Vite supports importing .ts files out of the box.

            Vite only performs transpilation on .ts files and does NOT perform type checking. It assumes type checking is taken care of by your IDE and build process (you can run tsc --noEmit in the build script or install vue-tsc and run vue-tsc --noEmit to also type check your *.vue files).
            
            Vite uses esbuild to transpile TypeScript into JavaScript which is about 20~30x faster than vanilla tsc, and HMR updates can reflect in the browser in under 50ms.
            
            Use the Type-Only Imports and Export syntax to avoid potential problems like type-only imports being incorrectly bundled, for example:`,

        }],

        

        vue:[{
            title: 'Vue',
            desc: `Vite provides first-class Vue support:`,
            list:[`Vue 3 SFC support via @vitejs/plugin-vue`, `Vue 3 JSX support via @vitejs/plugin-vue-jsx`, `Vue 2.7 support via @vitejs/plugin-vue2`, `Vue <2.7 support via vite-plugin-vue2`]
        }],

        jsx:[{
            title: 'JSX',
            desc: `.jsx and .tsx files are also supported out of the box. JSX transpilation is also handled via esbuild.

            Vue users should use the official @vitejs/plugin-vue-jsx plugin, which provides Vue 3 specific features including HMR, global component resolving, directives and slots.
            
            If not using JSX with React or Vue, custom jsxFactory and jsxFragment can be configured using the esbuild option. For example for Preact:`,
            para: ` You can inject the JSX helpers using jsxInject (which is a Vite-only option) to avoid manual imports: `,

        }],

     
        css:[{
            title: 'CSS',
            desc: `In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with npx vite. Here are the default npm scripts in a scaffolded Vite project:`,

            rebasing: [{
                title: '@import Inlining and Rebasing',
                desc: `Vite is pre-configured to support CSS @import inlining via postcss-import. Vite aliases are also respected for CSS @import. In addition, all CSS url() references, even if the imported files are in different directories, are always automatically rebased to ensure correctness.

                @import aliases and URL rebasing are also supported for Sass and Less files (see CSS Pre-processors).`
            }],
            postcss: [{
                title: 'PostCSS',
                desc: `If the project contains valid PostCSS config (any format supported by postcss-load-config, e.g. postcss.config.js), it will be automatically applied to all imported CSS.`
            }],
            cssmodules: [{
                title: 'CSS Modules',
                desc: `Any CSS file ending with .module.css is considered a CSS modules file. Importing such a file will return the corresponding module object:`
            }],
        }],

        staticassets:[{
            title: 'Static Assets',
            desc: `Importing a static asset will return the resolved public URL when it is served:`,

            para: `Special queries can modify how assets are loaded:`
        }],

        json:[{
            title: 'JSON',
            desc: `JSON files can be directly imported - named imports are also supported:`,
        }],
        globimport:[{
            title: 'Glob Import',
            desc: `Vite supports importing multiple modules from the file system via the special import.meta.glob function:`,
            
        }],


        }]
       

    },

    
    {
        id: 4,
        title: 'Using Plugins',
        desc: ` Vite can be extended using plugins, which are based on Rollup's well-designed plugin interface with a few extra Vite-specific options. This means that Vite users can rely on the mature ecosystem of Rollup plugins, while also being able to extend the dev server and SSR functionality as needed.`,

        plugin:[{
        prebuilding: [{
        title: 'Adding a Plugin',
        desc: ` To use a plugin, it needs to be added to the devDependencies of the project and included in the plugins array in the vite.config.js config file. For example, to provide support for legacy browsers, the official @vitejs/plugin-legacy can be used:`,
        
        para: `plugins also accepts presets including several plugins as a single element. This is useful for complex features (like framework integration) that are implemented using several plugins. The array will be flattened internally.

        Falsy plugins will be ignored, which can be used to easily activate or deactivate plugins.`,

        }],

        hotmodule: [{
            
            title: 'Finding Plugins',
            desc: `NOTE

            Vite aims to provide out-of-the-box support for common web development patterns. Before searching for a Vite or compatible Rollup plugin, check out the Features Guide. A lot of the cases where a plugin would be needed in a Rollup project are already covered in Vite.`,

            para: ` Check out the Plugins section for information about official plugins. Community plugins are listed in awesome-vite. For compatible Rollup plugins, check out Vite Rollup Plugins for a list of compatible official Rollup plugins with usage instructions or the Rollup Plugin Compatibility section in case it is not listed there.

            You can also find plugins that follow the recommended conventions using a npm search for vite-plugin for Vite plugins or a npm search for rollup-plugin for Rollup plugins. `

        }],

      
        typescript:[{

            title: 'Enforcing Plugin Ordering',
            desc:  `For compatibility with some Rollup plugins, it may be needed to enforce the order of the plugin or only apply at build time. This should be an implementation detail for Vite plugins. You can enforce the position of a plugin with the enforce modifier:`,
            
            list:[`pre: invoke plugin before Vite core plugins`, `default: invoke plugin after Vite core plugins
            `, `post: invoke plugin after Vite build plugins`],

            para: `Check out Plugins API Guide for detailed information, and look out for the enforce label and usage instructions for popular plugins in the Vite Rollup Plugins compatibility listing.`
        }],

        

        vue:[{
            title: 'Conditional Application',
            desc: `By default, plugins are invoked for both serve and build. In cases where a plugin needs to be conditionally applied only during serve or build, use the apply property to only invoke them during 'build' or 'serve': `,
           
        }],

        jsx:[{
            title: 'Building Plugins',
            desc: `Check out the Plugins API Guide for documentation about creating plugins.`,

        }],



        }]
       

    },


]