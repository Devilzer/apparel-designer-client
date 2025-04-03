import { useSnapshot } from 'valtio'

import state from '../store/index'

interface CustomButtomProps {
    type:'filled' | 'outline';
    title:string;
    handleClick: () => void;
    coustomStyles?: string;
}

const customButtom : React.FC<CustomButtomProps> = (
    {
    type,
    title,
    handleClick,
    coustomStyles =''
}) => {
     const snap = useSnapshot(state)

    const generateStyle = (type:'filled' | 'outline') => {
        if(type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: '#fff'
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
    <button className={`px-2 py-1.5 flex-1 rounded-md ${coustomStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}>
        {title}
    </button>
  )
}

export default customButtom