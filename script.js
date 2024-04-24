function init() {
    const config = {
        SVE: {
            contractBase: 1875,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        Loop: {
            contractBase: 14400,
            contractval: 0,
            training: 995,
            setup: 495,
        },
        Global: {
            contractBase: 15845,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        SocValEx: {
            contractBase: 12000,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        SocValPort: {
            contractBase: 18000,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        InHouse: {
            contractBase: 24000,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        Thrive: {
            contractBase: 40000,
            contractval: 0,
            training: 3000,
            setup: 0,
        },
    };

    const model = document.getElementById("model");
    const contracts = document.getElementById("contracts");
    const contractval = document.getElementById("contractval");
    const training = document.getElementById("training");
    const setup = document.getElementById("setup");
    const calculator = document.getElementById("calc");
    const totalCosts = document.getElementById("totalCosts");

    // console.log(model.parentElement.parentElement.hidden=true);
    // console.log(contracts);
    // console.log(contractval);
    // console.log(training);
    // console.log(setup);

    model.addEventListener("sl-change", () => {
        if (config.hasOwnProperty(model.value) === false) {
            console.log("Error property doesnt exist");
            return;
        }
        const selectedModel = config[model.value];

        // console.table(selectedModel);
        contracts.value = selectedModel.contractBase
        training.value = selectedModel.training
        setup.value = selectedModel.setup
        calc()

        for (const [key, value] of Object.entries(selectedModel)) {
            // console.log(`Key: ${key}, Value: ${value}`);
            if (typeof value == "object") {
                for (const [xkey, xvalue] of Object.entries(value)) {
                    console.log(key);
                }
            }
        }

    });

    contracts.addEventListener("sl-change", () => {
        calc()
    });
    training.addEventListener("sl-change", () => {
        calc()
    });
    setup.addEventListener("sl-change", () => {
        calc()        
    });
    
    function calc() {
        console.log(model.value)
        if(model.value === 'SocValPort') {
            totalCosts.value = ((1.5 / 100) * parseInt(contracts.value)) + parseInt(contracts.value) + parseInt(training.value) + parseInt(setup.value)

        } else 
        totalCosts.value = parseInt(contracts.value) + parseInt(training.value) + parseInt(setup.value)
    }


    function setField(id, value) {}
}

document.addEventListener("DOMContentLoaded", () => {
    init();
});
