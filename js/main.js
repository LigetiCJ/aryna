function initGL(){
    var canvas = document.getElementById("GLCanvas");
    gGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if(gGL !== null){
        gGL.clearColor(0.5,0.5,0.5,1.0);
        initSquareBuffer();
        initSimpleShader("VertexShader", "FragmentShader");
    }else{
        document.write("<br><b>failed to init webgl</b>");
    }
}

function clearCanvas(){
    gGL.clear(gGL.COLOR_BUFFER_BIT);
}

function drawSquare(){
    gGL.clear(gGL.COLOR_BUFFER_BIT);
    gGL.useProgram(gSimpleShader);
    gGL.enableVertexAttribArray(gShaderVertexPositionAttribute);
    gGL.drawArrays(gGL.TRIANGLE_STRIP, 0, 4);

}

function doGLDraw(){
    initGL();
    drawSquare();
}