const Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect,
    input = 6,
    pool = 40,
    output = 1,
    connections = 60,
    gates = 45,
    settings = {
        iterations: 100000,
        error: .005,
        cost: Trainer.cost.CROSS_MSE,
        log: 20000
    };

//var myNetwork = new Architect.Liquid(input, pool, output, connections, gates)
var myNetwork = new Architect.Liquid(input, pool, output, connections, gates)
var trainer = new Trainer(myNetwork);
var trainingSet = [
//   {
//     input: [r, g, b],
//     output: [score]
//   },
]

//code??

function onInput(){
    color = getColorArray().map(c => c/255);
    color = toObj(color, getScore());
    //console.log(color);
    trainingSet.push(color);
    scrambleColor();
}

function scrambleColor(){
    right.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8)
    left.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8)
}

function getScore(){
    return slider.value;
}

function getColorArray(){
    var arrL = left.style.backgroundColor.replace(/\D+/iug," ").split(" ").filter(s => s != "");
    var arrR = right.style.backgroundColor.replace(/\D+/iug," ").split(" ").filter(s => s != "");
    return([...arrL,...arrR]);
}

function toObj(colorArr, score){
    return({
        input: colorArr,
        output: [parseFloat(score)]
    })
}
function train(){
    trainer.trainAsync(trainingSet,settings).then(
    function (results) {
        console.log(results);
    }
    );
}
