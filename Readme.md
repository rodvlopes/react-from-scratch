# Estudo do Tutorial de React

Os exercícios estão organizados em branchs e cada branch tem um readme com o conteúdo relevante dele.

* [Voltar P/ Lista de Tópicos](../../tree/master)

# Parte Avançada: Error Boundaries

A forma a adequada para tratar erros na rendererização é utilizando um ErrorBoundary. Este componente especial deve ecapsular os componentes filhos que estão sujeitos a falharem. 

Para criar um ErrorBoundary basta criar um componente normal extendendo de React.Component e este deve implemnetar os métodos _static getDerivedStateFromError()_ or _componentDidCatch()_.

    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>


Como as falhas no Eventos não impactam na renderização, os error dos *Event Handlers* devem ser tratado com o try...catch do JS.

# High Order Component

Esta é a melhor forma para encapsular e compartilhar comportamentos em comum aos componentes. Um *HOC* é uma função pura (sem efeitos colaterais) que recebe um componente como argumento (e possivelmente outros argumentos) e retorna um novo componente "bombado" com uma nova funcionalidade.

    // This function takes a component...
    function withSubscription(WrappedComponent, selectData) {
      // ...and returns another component...
      return class extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {
            data: selectData(DataSource, props)
          };
        }

        handleChange() {
          this.setState({
            data: selectData(DataSource, this.props)
          });
        }

        render() {
          return <WrappedComponent data={this.state.data} {...this.props} />;
        }
      };
    }
