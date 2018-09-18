const Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
	Architect = synaptic.Architect;

var myNetwork = new Architect.Perceptron(1, 2, 2, 1);
var trainer = new Trainer(myNetwork);

var trainingSet = [
  {
    input: [0.9],
    output: [0.0]
  },
  {
    input: [0.8],
    output: [0.9]
  },
  {
    input: [0.7],
    output: [0.8]
  },
  {
    input: [0.6],
    output: [0.7]
  },
  {
    input: [0.5],
    output: [0.6]
  },
  {
    input: [0.4],
    output: [0.5]
  },
  {
    input: [0.3],
    output: [0.4]
  },
  {
    input: [0.2],
    output: [0.3]
  },
  {
    input: [0.1],
    output: [0.2]
  },
  {
    input: [0.0],
    output: [0.1]
  },
]

const settings = {
	iterations: 500000,
	error: .0001,
  cost: Trainer.cost.CROSS_MSE,
  log: 100000
}

trainer.trainAsync(trainingSet,settings).then(
  function () {
    for(var i = 0.9; i >= 0; i -= 0.1){
      console.log(`[${Math.round(i*10)}] --> `, Math.round(myNetwork.activate([i])*10));
    }
  }
);

