import React from 'react';
import { Icon } from '../../../components/Plants/Plant/styles';

import { ReactComponent as HighSun } from '../../../assets/icons/grey/high-sun.svg';
import { ReactComponent as LowSun } from '../../../assets/icons/grey/low-sun.svg';
import { ReactComponent as NoAnswer } from '../../../assets/icons/grey/no-answer.svg';
import { ReactComponent as OneDrop } from '../../../assets/icons/grey/one-drop.svg';
import { ReactComponent as TwoDrops } from '../../../assets/icons/grey/two-drops.svg';
import { ReactComponent as ThreeDrops } from '../../../assets/icons/grey/three-drops.svg';
import { ReactComponent as Pet } from '../../../assets/icons/grey/pet.svg';
import { ReactComponent as Toxic } from '../../../assets/icons/grey/toxic.svg';

export default function ContactIcon(params) {
    const { value } = params;
    const option =  value===true ? 'true' :
                    value===false ? 'false' :
                    value;
    function renderIcon(){
        switch(option){
            case 'high': return <HighSun className="iconPlantList" />;
            case 'low': return <LowSun className="iconPlantList" />;
            case 'no': return <NoAnswer className="iconPlantList" />;
            case 'daily': return <ThreeDrops className="iconPlantList" />;
            case 'regularly': return <TwoDrops className="iconPlantList" />;
            case 'rarely': return <OneDrop className="iconPlantList" />;
            case 'true': return <Toxic className="iconPlantList" />;
            case 'false': return <Pet className="iconPlantList" />;
            default: return '';
        }
    }

    function renderLabel(){
        switch(option){
            case 'high': return "High sunlight";
            case 'low': return "Low sunlight";
            case 'no': return "No sunlight";
            case 'daily': return "Water daily";
            case 'regularly': return "Water regularly";
            case 'rarely': return "Water rarely";
            case 'true': return "Toxic for pets";
            case 'false': return "Non-toxic for pets";
            default: return '';
        }
    }
    
  return (
    <Icon className="icon-purchase">
        {renderIcon()}
        <span>{renderLabel()}</span>
    </Icon>
  );
}
