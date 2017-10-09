<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Index.aspx.vb" Inherits="Ang2Test.Index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

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
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <my-app>loading...</my-app>
    </div>
    </form>
</body>
</html>
