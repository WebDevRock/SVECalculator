function init() {
    const config = {
        SVE: {
            contractValue: 0,
            fee: 1875,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        Loop: {
            contractValue: 0,
            fee: 14400,
            contractval: 0,
            training: 995,
            setup: 495,
        },
        Global: {
            contractValue: 0,
            fee: 15845,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        SocValEx: {
            contractValue: 0,
            fee: 12000,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        SocValPort: {
            contractValue: 0,
            fee: 18000,
            contractval: 0,
            training: 0,
            setup: 0,
            contractValue: 0,
        },
        InHouse: {
            contractValue: 0,
            fee: 24000,
            contractval: 0,
            training: 0,
            setup: 0,
        },
        Thrive: {
            contractValue: 0,
            fee: 40000,
            contractval: 0,
            training: 3000,
            setup: 0,
        },
    };

    const model = document.getElementById("model");
    const contracts = document.getElementById("contracts");
    const contractValue = document.getElementById("contractValue");
    const training = document.getElementById("training");
    const setup = document.getElementById("setup");
    const totalCosts = document.getElementById("totalCosts");
    const totalSaving = document.getElementById("totalSaving");

    model.addEventListener("sl-change", () => {
        if (config.hasOwnProperty(model.value) === false) {
            console.log("Error property doesnt exist");
            return;
        }
        const selectedModel = config[model.value];


        // console.table(selectedModel);
        model.setAttribute('help-text', "Based on an average cost: £" + selectedModel.fee)
        
        contractValue.disabled = model.value === 'SocValPort' ? false : true
        
        contracts.value = selectedModel.fee
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
    contractValue.addEventListener("sl-change", () => {
        calc()        
    });
    
    function calc() {
        // console.log(model.value)
        if(model.value === 'SocValPort') {
            const defaults = config[model.value];
            let fee = parseInt(contracts.value) === defaults.fee ? defaults.fee : parseInt(contracts.value)
            totalCosts.value = ((0.15 / 100) * parseInt(contractValue.value)) +  parseInt(contracts.value) + parseInt(training.value) + parseInt(setup.value)
            

        } else 
        totalCosts.value = parseInt(contracts.value) + parseInt(training.value) + parseInt(setup.value)
        totalSaving.value = totalCosts.value - config['SVE'].fee
    }


    function setField(id, value) {}
}

document.addEventListener("DOMContentLoaded", () => {
    init();
});
