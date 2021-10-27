import { Container } from './styled'

export default function Paginas(props) {

    function getPages() {
      let paginas = [];
      for (let i = 1; i <= props.totalPaginas; i++) {
        paginas.push(i);
      }
      return paginas;
    }
  
    function irPara(pagina) {
      props.onPageChange(pagina);
    }
  
    function anterior() {
      if (props.pagina === 1)
        props.onPageChange(props.totalPaginas);  
      else 
        props.onPageChange(props.pagina-1);
    }
    
    function proximo() {
      if (props.pagina === props.totalPaginas)
        props.onPageChange(1);
      else
        props.onPageChange(props.pagina+1);
    }
  
  
    return (
      <Container paginaAtual={props.pagina}>
        <div className="page" onClick={anterior}>
            {"<"}
        </div>
        {getPages().map(p => 
          <div className="page" onClick={() => irPara(p)}>
            {p}
          </div>
        )}
        <div className="page" onClick={proximo}>
            {">"}
        </div>
      </Container>
    )
  }