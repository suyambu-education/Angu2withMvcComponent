# Angu2withMvcComponent
Use this file for Angular2 With Mvc

##Use this code in view page

     <script src="../../node_modules/core-js/client/shim.min.js"></script>
    <script src="../../node_modules/zone.js/dist/zone.js"></script>
    <script src="../../node_modules/reflect-metadata/Reflect.js"></script>
    <script src="../../node_modules/systemjs/dist/system.src.js"></script>
    <script src="../../Scripts/systemjs.config.js"></script>
    <script>
        System.import('../../Scripts/App/main').catch(function (err)
        {
            console.error(err);
        });
    </script>
