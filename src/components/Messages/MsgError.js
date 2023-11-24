import {Space, Alert} from 'antd'

const MsgError = (props) => {
  return (
<Space direction="vertical" style={{ width: '100%' }}>
  <Alert
  className='text-center'
    // message="Error"
    description={`${props.text1}: ${props.text2}`}
    type="error"
    showIcon
  />

</Space>
  );
};

export default MsgError;