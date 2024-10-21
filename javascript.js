<script src="https://druni--int.sandbox.lightning.force.com/lightning/lightning.out.js"></script>
 
<script type="text/javascript">  
    (function() {
      console.log('init component');
        $Lightning.use("c:embeddedCaseFormWebApp",    // nombre de la aplicación Lightning
            function() {  
                console.log('Agregar componente.');                
                $Lightning.createComponent(
                    "c:embeddedCaseFormWeb", // componente de nivel superior de tu aplicación
                    {},                     // atributos a establecer en el componente cuando se crea
                    "lexcontainer",         // la ubicación del DOM para insertar el componente
                    function(cmp) { 
                        console.log('Inicializado.'); // callback cuando el componente está activo
                    }
                );
            },
            'https://druni.my.salesforce-sites.com/casoWeb'  // endpoint de Experience Cloud
        );
    })();
</script>
