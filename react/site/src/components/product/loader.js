import ContentLoader from 'react-content-loader';


const Loader = (props) => (
    <ContentLoader 
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="227" y="126" rx="0" ry="0" width="123" height="11" /> 
      <rect x="209" y="149" rx="3" ry="3" width="157" height="11" /> 
      <rect x="215" y="6" rx="10" ry="10" width="148" height="109" /> 
      <rect x="280" y="150" rx="0" ry="0" width="2" height="0" />
    </ContentLoader>
  )
  
  export default Loader