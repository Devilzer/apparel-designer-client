interface TabProps {
tab:object;
handleClick: () => void;
isFilterTab?: boolean;
isActiveTab?: string;
}
const tab : React.FC<TabProps> = ({
  tab,
  handleClick,
  isFilterTab,
  isActiveTab
}) => {
  return (
    <div>tab</div>
  )
}

export default tab