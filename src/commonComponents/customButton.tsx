import { useSnapshot } from 'valtio'

import state from '../store/index'

import { getContrastingColor } from '../config/helpers';

interface CustomButtonProps {
    type:'filled' | 'outline';
    title:string;
    handleClick: () => void;
    customStyles?: string;
}

const customButton : React.FC<CustomButtonProps> = (
    {
    type,
    title,
    handleClick,
    customStyles =''
}) => {
     const snap = useSnapshot(state)

    const generateStyle = (type:'filled' | 'outline') => {
        if(type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        } else if(type === 'outline') { 
            return {
                borderWidth: '1px',
                borderColor: '#000',
                color: '#000'
            }
        }
    }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}>
        {title}
    </button>
  )
}

export default customButton