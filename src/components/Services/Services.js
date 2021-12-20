import { ReactComponent as Eagle } from '../../../src/svg/eagle.svg';
import { ReactComponent as Schmidt } from '../../../src/svg/schmidt.svg';
import { ReactComponent as DT } from '../../../src/svg/dt.svg';
import { ReactComponent as NDT } from '../../../src/svg/ndt.svg';


function Services() {
    return (
        <section id="tm-section-3" className="tm-section">
            <div className="row mb-4">
                <header className="col-xl-12"><h2 className="tm-text-shadow">Services</h2></header>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                    <div className="media tm-bg-transparent-black tm-border-white">
                        <NDT id="ndt" className="mr-4 tm-icon-circled tm-icon-media" />
                        <div className="media-body">
                            <h3>Non-Destructive Inspections</h3>
                            <p>We provide NDT Inspections on building structures and matirials with state of the art equipment and techniques.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                    <div className="media tm-bg-transparent-black tm-border-white">
                        <DT id="dt" className="mr-4 tm-icon-circled tm-icon-media" />
                        <div className="media-body">
                            <h3>Destructive Inspections</h3>
                            <p>With our highly qualified specialists we provide Destructive Inspections on concrete samples taken from your construction.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                    <div className="media tm-bg-transparent-black tm-border-white">
                        <Schmidt id="schmidt" className="mr-4 tm-icon-circled tm-icon-media" />
                        <div className="media-body">
                            <h3>Measuring Instruments</h3>
                            <p>Our laboratory is an Authorized Distributor of Screening Eagle and Proceq instruments for concrete inspection.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-4">
                    <div className="media tm-bg-transparent-black tm-border-white">
                        <Eagle id="eagle" className="mr-4 tm-icon-circled tm-icon-media" />
                        <div className="media-body">
                            <h3>Proceq Service Center</h3>
                            <p>Our laboratory is an Authorized Service Center of Proceq instruments for concrete inspection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;