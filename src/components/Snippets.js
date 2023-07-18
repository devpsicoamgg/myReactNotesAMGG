import React from 'react';

export default function Snippets() {
  return (
    <>
      <h2>Snippets</h2>
      <ul>
        <li><code>imr = import React from 'react';</code></li>
        <li><code>imrc = import React, &#123; PureComponent &#125; from 'react';</code></li>
        <li><code>imrd = import ReactDOM from 'react-dom';</code></li>
        <li><code>imrs = import React, &#123; useState &#125; from 'react';</code></li>
        <li><code>imrse = import React, &#123; useState, useEffect &#125; from 'react';</code></li>
        <li><code>impt = import PropTypes from 'prop-types';</code></li>
        <li><code>impc = import React, &#123; PureComponent &#125; from 'react';</code></li>
        <li><code>cc = class Component extends React.Component &#123; ... &#125;</code></li>
        <li><code>ccc = class Component extends React.Component &#123; constructor(props) &#123; super(props); this.state = &#123; ... &#125;; &#125; render() &#123; return ( ... ); &#125; &#125;</code></li>
        <li><code>cpc = class Component extends React.PureComponent &#123; state = &#123; ... &#125;; render() &#123; return ( ... ); &#125; &#125;</code></li>
        <li><code>ffc = function Component(props) &#123; return ( ... ); &#125;</code></li>
        <li><code>sfc = const FunctionalComponent = (props) => &#123; return ( ... ); &#125;</code></li>
        <li><code>cdm = componentDidMount() &#123; ... &#125;</code></li>
        <li><code>uef = useEffect(() => &#123; ... &#125;, []);</code></li>
        <li><code>cwm = componentWillMount() &#123; ... &#125;</code></li>
        <li><code>cwrp = componentWillReceiveProps(nextProps) &#123; ... &#125;</code></li>
        <li><code>gds = static getDerivedStateFromProps(nextProps, prevState) &#123; ... &#125;</code></li>
        <li><code>scu = shouldComponentUpdate(nextProps, nextState) &#123; ... &#125;</code></li>
        <li><code>cwu = componentWillUpdate(nextProps, nextState) &#123; ... &#125;</code></li>
        <li><code>cdu = componentDidUpdate(prevProps, prevState) &#123; ... &#125;</code></li>
        <li><code>cwun = componentWillUnmount() &#123; ... &#125;</code></li>
        <li><code>cdc = componentDidCatch(error, info) &#123; ... &#125;</code></li>
        <li><code>gsbu = getSnapshotBeforeUpdate(prevProps, prevState) &#123; ... &#125;</code></li>
        <li><code>ss = this.setState(&#123; ... &#125;);</code></li>
        <li><code>ssf = this.setState(prevState => &#123; return &#123; ... &#125;; &#125;);</code></li>
        <li><code>usf = const [state, setState] = useState(initialState);</code></li>
        <li><code>ren = render() &#123; return ( ... ); &#125;</code></li>
        <li><code>rprop = class RenderProp extends React.Component &#123; render() &#123; return this.props.render(&#123; ... &#125;); &#125; &#125;</code></li>
        <li><code>hoc = function HigherOrderComponent(WrappedComponent) &#123; return class extends React.Component &#123; ... &#125;; &#125;;</code></li>
        <li><code>cpf = this.functionName = (e) => &#123; ... &#125;;</code></li>
      </ul>
    </>
  );
}
