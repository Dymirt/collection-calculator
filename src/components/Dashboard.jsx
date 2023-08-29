import React from 'react';

const Dashboard = () => {
    const [collection_amount, setCollectionAmount] = React.useState(200);
    const [collection_latency, setCollectionLatency] = React.useState(1);
    const [collection_provision, setCollectionProvision] = React.useState(calculateCollectionProvision());

    const min_collection_amount = 200;
    const max_collection_amount = 1000000;
    const step_collection_amount = 100;

    const min_collection_latency = 1;
    const max_collection_latency = 1095;
    const step_collection_latency = 1;

    function calculateCollectionProvision() {
        switch (true) {
            case (collection_amount <= 5000 && collection_latency <= 3 * 30):
                return collection_amount * 0.16;
            case (collection_amount <= 30000 && collection_latency <= 3 * 30):
                return collection_amount * 0.11;
            case (collection_amount <= 50000 && collection_latency <= 3 * 30):
                return collection_amount * 0.08;
            case (collection_amount > 50000 && collection_latency <= 3 * 30):
                return collection_amount * 0.06;

            case (collection_amount <= 5000 && collection_latency <= 12 * 30):
                return collection_amount * 0.21;
            case (collection_amount <= 30000 && collection_latency <= 12 * 30):
                return collection_amount * 0.13;
            case (collection_amount <= 50000 && collection_latency <= 12 * 30):
                return collection_amount * 0.11;
            case (collection_amount > 50000 && collection_latency <= 12 * 30):
                return collection_amount * 0.09;

            case (collection_amount <= 5000 && collection_latency > 12 * 30):
                return collection_amount * 0.21;
            case (collection_amount <= 30000 && collection_latency > 12 * 30):
                return collection_amount * 0.16;
            case (collection_amount <= 50000 && collection_latency > 12 * 30):
                return collection_amount * 0.13;
            case (collection_amount > 50000 && collection_latency > 12 * 30):
                return collection_amount * 0.11;
            default:
                return 0;
        }
    }

    // Call the function to initialize collection_provision
    React.useEffect(() => {
        setCollectionProvision(calculateCollectionProvision());
    }, [collection_amount, collection_latency]);

    return (
            <div>

                <div className='input-group'>
                    <label htmlFor="wpas_log">Jaki dług chcesz odzyskać:</label>
                    <span><input
                            className="wpas-form-control"
                            type="number"
                            min={min_collection_amount}
                            max={max_collection_amount}
                            step={step_collection_amount}
                            value={collection_amount}
                            onChange={(e) => setCollectionAmount(parseInt(e.target.value, 10))}
                        />
                        zł</span>

                    <input
                        type="range"
                        min={min_collection_amount}
                        max={max_collection_amount}
                        step={step_collection_amount}

                        value={collection_amount}
                        onChange={(e) => setCollectionAmount(parseInt(e.target.value, 10))}
                    />
                </div>
                <div className='input-group'>
                    <label htmlFor="wpas_log">Przeterminowanie płatnośći:</label>
                    <span><input
                        className="wpas-form-control"

                        type="number"
                        min={min_collection_latency}
                        max={max_collection_latency}
                        step={step_collection_latency}
                        value={collection_latency}
                        onChange={(e) => setCollectionLatency(parseInt(e.target.value, 10))}
                    />
                    dni</span>
                    <input
                        type="range"
                        min={min_collection_latency}
                        max={max_collection_latency}
                        step={step_collection_latency}
                        value={collection_latency}

                        onChange={(e) => setCollectionLatency(parseInt(e.target.value, 10))}
                    />

                </div>
                <p>Koszt windykacji wyniesie: <strong>{collection_provision} zł</strong></p>
                <p>Koszt windykacji u konkurencji wyniesie: <strong>{collection_amount * 0.06}zł</strong></p>
            </div>
    );
}

export default Dashboard;