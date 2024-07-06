import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../utils/accordion';
import { useState } from 'react';

function Value() {
    return (
        <section className='v-wrapper' id='value'>
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src="../../public/value.png" alt="value" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give To You</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. <br /> We beleive a good blace to live can make your life better
                    </span>
                    <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                const [className, setclassName] = useState(null);
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setclassName('expanded') : setclassName('collapsed')}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <div className="primaryText">{item.heading}</div>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <div className="secondaryText">{item.detail}</div>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default Value;
