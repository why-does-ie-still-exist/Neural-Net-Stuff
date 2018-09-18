const Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
	Architect = synaptic.Architect;
var input = 1;
var pool = 40;
var output = 1;
var connections = 60;
var gates = 45;

var myNetwork = new Architect.Liquid(input, pool, output, connections, gates)
var trainer = new Trainer(myNetwork);

var trainingSet = [
  {
    input: [1.0, Math.random(), Math.random()],
    output: [1.0]
  },
  {
    input: [0.75, Math.random(), Math.random()],
    output: [0.75]
  },
  {
    input: [0.2, Math.random(), Math.random()],
    output: [0.2]
  },
  {
    input: [0.3, Math.random(), Math.random()],
    output: [0.5]
  },
  {
    input: [0.6, Math.random(), Math.random()],
    output: [0.6]
  },
  {
    input: [0.7, Math.random(), Math.random()],
    output: [0.7]
  },
  {
    input: [0.4, Math.random(), Math.random()],
    output: [0.4]
  },
  {
    input: [0.1, Math.random(), Math.random()],
    output: [0.1]
  },
  {
    input: [0.8, Math.random(), Math.random()],
    output: [0.8]
  },
  {
    input: [0.9, Math.random(), Math.random()],
    output: [0.9]
  },
  {
    input: [0.41, Math.random(), Math.random()],
    output: [0.41]
  },
]

const settings = {
    iterations: 100000,
    error: .0001,
    cost: Trainer.cost.CROSS_MSE,
    log: 20000
}

trainer.trainAsync(trainingSet,settings).then(
  function (results) {
    console.log(results);
  }
);

