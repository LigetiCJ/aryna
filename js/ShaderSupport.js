var gSimpleShader = null;
var gShaderVertexPositionAttribute = null;

function loadAndCompile(id, shaderType){
    var shaderText, shaderSource, compiledShader;

    shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;
    
    compiledShader = gGL.createShader(shaderType);
    
    gGL.shaderSource(compiledShader, shaderSource);
    gGL.compileShader(compiledShader);
    
    if(!gGL.getShaderParameter(compiledShader, gGL.COMPILE_STATUS)){
        alert("SHADER FAILED TO COMPILE");
    }   
    return compiledShader;
}

function initSimpleShader(vertexShaderID, fragmentShaderID){
    var vertexShader = loadAndCompile(vertexShaderID, gGL.VERTEX_SHADER);
    var fragmentShader = loadAndCompile(fragmentShaderID, gGL.FRAGMENT_SHADER);
    gSimpleShader = gGL.createProgram();
    gGL.attachShader(gSimpleShader, vertexShader);
    gGL.attachShader(gSimpleShader, fragmentShader);
    gGL.linkProgram(gSimpleShader);
    if(!gGL.getProgramParameter(gSimpleShader, gGL.LINK_STATUS)) alert("FAILED TO LINK SHADERS");
    gShaderVertexPositionAttribute = gGL.getAttribLocation(gSimpleShader, "aSquareVertexPosition");

    gGL.bindBuffer(gGL.ARRAY_BUFFER, gSquareVertexBuffer);

    gGL.vertexAttribPointer(gShaderVertexPositionAttribute,
        3,
        gGL.FLOAT,
        false,
        0,
        0);
}