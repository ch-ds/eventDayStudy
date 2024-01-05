import{_ as s,o as a,c as n,V as l}from"./chunks/framework.8db60172.js";const e="/eventDayStudy/assets/img4.9108dd90.png",p="/eventDayStudy/assets/img1.dfb8efba.png",t="/eventDayStudy/assets/img2.e9be9175.png",o="/eventDayStudy/assets/img3.d72050c7.png",m=JSON.parse('{"title":"React18学习","description":"","frontmatter":{},"headers":[],"relativePath":"dev-frame/react/index.md","filePath":"dev-frame/react/index.md","lastUpdated":1704443976000}'),c={name:"dev-frame/react/index.md"},i=l(`<h1 id="react18学习" tabindex="-1">React18学习 <a class="header-anchor" href="#react18学习" aria-label="Permalink to &quot;React18学习&quot;">​</a></h1><h2 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h2><ol><li><p>下载 node yarn 等</p><div class="language-node"><button title="Copy Code" class="copy"></button><span class="lang">node</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npx create-react-app my-app</span></span>
<span class="line"><span style="color:#A6ACCD;">npm init react-app my-app</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn create react-app my-app</span></span></code></pre></div></li></ol><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><h3 id="插值语法" tabindex="-1">插值语法 <a class="header-anchor" href="#插值语法" aria-label="Permalink to &quot;插值语法&quot;">​</a></h3><p><code>{}</code> 里面可以写变量</p><h3 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-label="Permalink to &quot;useState&quot;">​</a></h3><h4 id="单项绑定-数据更改视图" tabindex="-1">单项绑定（数据更改视图） <a class="header-anchor" href="#单项绑定-数据更改视图" aria-label="Permalink to &quot;单项绑定（数据更改视图）&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">useState</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 第一个参数是值，第二参数是更改方法</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">setCount</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setCount</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">setObj</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useState</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">李四</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setObj</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h4 id="双向绑定" tabindex="-1">双向绑定 <a class="header-anchor" href="#双向绑定" aria-label="Permalink to &quot;双向绑定&quot;">​</a></h4><p>input框，双向绑定</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const [value, setValue] = useState(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;input value={value} onChange={(e) =&gt; setValue(e.target.value)}/&gt;</span></span></code></pre></div><h3 id="usereducer" tabindex="-1">useReducer <a class="header-anchor" href="#usereducer" aria-label="Permalink to &quot;useReducer&quot;">​</a></h3><ol><li><p>定义一个reducer函数（根据不同的action返回不同的新状态）</p><p><strong>type</strong> 和 <strong>payload</strong> 一般是规范</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function reducer (state,action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 根据不同的action type 返回不同的state</span></span>
<span class="line"><span style="color:#A6ACCD;">	switch (action.type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		case &#39;1&#39;: </span></span>
<span class="line"><span style="color:#A6ACCD;">			return state + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">		case &#39;2&#39;: </span></span>
<span class="line"><span style="color:#A6ACCD;">			return state + 2</span></span>
<span class="line"><span style="color:#A6ACCD;">		case &#39;3&#39;: </span></span>
<span class="line"><span style="color:#A6ACCD;">			return state + 3</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>在组件中调用useReducer，并传入reducer函数和状态的初始值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const [state,dispatch] = useReducer(reducer, 0)</span></span></code></pre></div></li><li><p>时间发生时，通过dispatch函数分派一个action对象</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dispatch({type: &#39;1&#39;})</span></span></code></pre></div></li></ol><h3 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo&quot;">​</a></h3><p>作用： 在组件每次重新渲染的时候缓存计算结果，类似vue的component</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {useMemo} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 第二个参数代表依赖，数组中的数据改了就会执行</span></span>
<span class="line"><span style="color:#A6ACCD;">useMemo(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 返回计算得到的结果</span></span>
<span class="line"><span style="color:#A6ACCD;">},[])</span></span></code></pre></div><h3 id="react-memo" tabindex="-1">React.memo <a class="header-anchor" href="#react-memo" aria-label="Permalink to &quot;React.memo&quot;">​</a></h3><p>作用： 允许组件在Props没有改变的情况下跳过渲染</p><p>React组件默认渲染机制，只要父组件重新渲染子组件就会重新渲染</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {memo} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const MemoCompoent = memo(function App() {return &lt;div&gt;&lt;/div&gt;})</span></span></code></pre></div><h3 id="usecallback" tabindex="-1">useCallback <a class="header-anchor" href="#usecallback" aria-label="Permalink to &quot;useCallback&quot;">​</a></h3><p>作用： 在组件多次重新渲染的时候缓存函数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {useCallback} from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const changeHandler = useCallback((value) =&gt; console.log(value),[])</span></span></code></pre></div><h3 id="forwardref" tabindex="-1">forwardRef <a class="header-anchor" href="#forwardref" aria-label="Permalink to &quot;forwardRef&quot;">​</a></h3><p>作用：暴露的dom节点给父组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 子组件</span></span>
<span class="line"><span style="color:#A6ACCD;">const Input = forwardRef((props,ref) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	return &lt;input type=&quot;text&quot; ref={ref}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 父组件</span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	const inputRef = useRef(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">	return (</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;Input ref={inputRef}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="useimperativehandle" tabindex="-1">useImperativeHandle <a class="header-anchor" href="#useimperativehandle" aria-label="Permalink to &quot;useImperativeHandle&quot;">​</a></h3><p>作用： 暴露子组件里的方法，需要搭配forwardRef</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 子组件</span></span>
<span class="line"><span style="color:#A6ACCD;">const Input = forwardRef((props,ref) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	const inputRef = useRef();</span></span>
<span class="line"><span style="color:#A6ACCD;">	useImperativeHandle(ref, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return {inputRef}</span></span>
<span class="line"><span style="color:#A6ACCD;">	})</span></span>
<span class="line"><span style="color:#A6ACCD;">	return &lt;input type=&quot;text&quot; ref={inputRef}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 父组件</span></span>
<span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	const inputRef = useRef(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">	return (</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;Input ref={inputRef}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="dangerouslysetinnerhtml" tabindex="-1">dangerouslySetInnerHTML <a class="header-anchor" href="#dangerouslysetinnerhtml" aria-label="Permalink to &quot;dangerouslySetInnerHTML&quot;">​</a></h3><p>作用：渲染html，类似v-html</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;div dangerouslySetInnerHTML={{&#39;&lt;div&gt;&lt;/div&gt;&#39;}}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><h3 id="class" tabindex="-1">Class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;Class&quot;">​</a></h3><p>用className绑定class</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import &#39;./App.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div className=&quot;name&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span></code></pre></div><h3 id="绑定方法" tabindex="-1">绑定方法 <a class="header-anchor" href="#绑定方法" aria-label="Permalink to &quot;绑定方法&quot;">​</a></h3><p>使用<code>onClick={fn}</code></p><ol><li><p>不带参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const handleClick = (e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;click test&#39;, e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    	&lt;div onClick={handleClick}&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>带参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const App = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const handleClick = (name, e) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;click test&#39;, name, e)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    	&lt;div onClick={(e) =&gt; handleClick(&#39;张三&#39;,e)}&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol><h3 id="获取dom元素" tabindex="-1">获取Dom元素 <a class="header-anchor" href="#获取dom元素" aria-label="Permalink to &quot;获取Dom元素&quot;">​</a></h3><ol><li><p>使用useRef获取</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const inputRef = useRef(null)</span></span></code></pre></div></li><li><p>使用 ref 绑定 dom元素</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;input ref={inputRef} /&gt;</span></span></code></pre></div></li><li><p>使用 <strong>.current</strong> 获取dom元素</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">inputRef.current</span></span></code></pre></div></li></ol><h3 id="父传子" tabindex="-1">父传子 <a class="header-anchor" href="#父传子" aria-label="Permalink to &quot;父传子&quot;">​</a></h3><h4 id="props说明" tabindex="-1">props说明 <a class="header-anchor" href="#props说明" aria-label="Permalink to &quot;props说明&quot;">​</a></h4><ul><li>子组件只能读取props的数据，不能直接修改，父组件的数据只能由父组件修改</li></ul><h4 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h4><p>嵌套在 Son组件 里面的元素都是<code>props.children</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Son&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;span&gt;children&lt;/span&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Son&gt;</span></span></code></pre></div><h3 id="子传父" tabindex="-1">子传父 <a class="header-anchor" href="#子传父" aria-label="Permalink to &quot;子传父&quot;">​</a></h3><p>在子组件里调用父组件传递的函数</p><ol><li><p>父组件绑定方法到子组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function App() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const fatherGetSonStr = (msg) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;我是父组件，子组件传递来的数据是:&#39;, msg)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Son getStr={fatherGetSonStr}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Son&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>子组件调用父组件的方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const Son = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const str = &#39;son msg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div onClick={() =&gt; props.getStr(str)}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      我是子组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol><h3 id="兄弟组件通信" tabindex="-1">兄弟组件通信 <a class="header-anchor" href="#兄弟组件通信" aria-label="Permalink to &quot;兄弟组件通信&quot;">​</a></h3><p>父组件定义数组，通过接收子组件1的数据，再转给子组件2</p><ol><li><p>父组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [msg, setMsg] = useState(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const getMsg = (msg) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setMsg(msg)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Son1 sendMsg={getMsg}&gt;&lt;/Son1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Son2 msg={msg}&gt;&lt;/Son2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>子1传递数据给父组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const Son1 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const msg = &#39;son1 msg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      我是Son1:</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; props.sendMsg(msg)}&gt;传递Son1 msg&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {props.msg}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>子2接收数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const Son2 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      我是Son2:</span></span>
<span class="line"><span style="color:#A6ACCD;">      {props.msg}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol><h3 id="context机制跨层级组件通信" tabindex="-1">Context机制跨层级组件通信 <a class="header-anchor" href="#context机制跨层级组件通信" aria-label="Permalink to &quot;Context机制跨层级组件通信&quot;">​</a></h3><ol><li><p>使用<code>createContext</code>方法创建一个上下文对象Ctx</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const MsgCtx = createContext()</span></span></code></pre></div></li><li><p>在顶层组件使用 <code>Ctx.provider组件</code>提供数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const msg = &#39;app msg&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;MsgCtx.Provider value={msg}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Son1&gt;&lt;/Son1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/MsgCtx.Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>底层使用 <code>useContext</code> 获取数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const Son2 = (props) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const msg = useContext(MsgCtx)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      我是Son2:{msg}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol><h3 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-label="Permalink to &quot;useEffect&quot;">​</a></h3><p><code>useEffect</code>是一个 React Hook 函数，用于在React组件中创建不是由事件引起而是<strong>渲染本身引起的操作</strong>，比如Vue生命周期。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 参数1是要执行的操作，参数2是依赖项</span></span>
<span class="line"><span style="color:#A6ACCD;">useEffect(() =&gt; {}, [])</span></span></code></pre></div><p>第二个参数的三种情况：</p><ol><li>没有依赖项： 初始 + 组件更新</li><li>空依赖项： 初始</li><li>有依赖项：初始 + 依赖项更新</li></ol><p>当触发以上情况就会执行参数一的回调方法</p><h4 id="使用方法" tabindex="-1">使用方法： <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法：&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const delay = (time) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return new Promise((r) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;完成&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      r()</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, time)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    delay(2000)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, []);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="清除副作用-就是清除useeffect" tabindex="-1">清除副作用（就是清除useEffect) <a class="header-anchor" href="#清除副作用-就是清除useeffect" aria-label="Permalink to &quot;清除副作用（就是清除useEffect)&quot;">​</a></h4><ul><li>使用方法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">useEffect(() =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	//  副作用逻辑</span></span>
<span class="line"><span style="color:#A6ACCD;">	//  .....</span></span>
<span class="line"><span style="color:#A6ACCD;">	return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 清除副作用逻辑,组件卸载时执行</span></span>
<span class="line"><span style="color:#A6ACCD;">		// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><ul><li>例子</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const Son = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const timer = setInterval(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      requestAnimationFrame(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;定时器在执行&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      clearInterval(timer)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;son组件&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [bool, setBool] = useState(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; setBool(!bool)}&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr&gt;&lt;/hr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {bool &amp;&amp; &lt;Son&gt;&lt;/Son&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><strong>注意</strong>：严格模式下会执行两次，就是 <strong>index.js</strong>文件下的<code>React.StrictMode</code>组件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">root.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &lt;React.StrictMode&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;App /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // &lt;/React.StrictMode&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div><h3 id="自定义hook" tabindex="-1">自定义Hook <a class="header-anchor" href="#自定义hook" aria-label="Permalink to &quot;自定义Hook&quot;">​</a></h3><p>概念： 自定义hook 一般以 <strong>use开头的函数</strong>，实现逻辑的封装和复用</p><ul><li>注意事项 <ol><li>只能在组件或者其他Hook中使用</li><li>只能在组件顶层调用，不能嵌套在if for等其他函数中</li></ol></li></ul><h5 id="封装之前" tabindex="-1">封装之前 <a class="header-anchor" href="#封装之前" aria-label="Permalink to &quot;封装之前&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [bool, setBool] = useState(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const toggle = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setBool(!bool)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={toggle}&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr&gt;&lt;/hr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {bool &amp;&amp; &lt;Son&gt;&lt;/Son&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h5 id="封装后" tabindex="-1">封装后 <a class="header-anchor" href="#封装后" aria-label="Permalink to &quot;封装后&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const useToggleSon = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const [bool, setBool] = useState(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const toggle = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setBool(!bool)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    bool,</span></span>
<span class="line"><span style="color:#A6ACCD;">    toggle</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { bool, toggle } = useToggleSon()</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={toggle}&gt;toggle&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;hr&gt;&lt;/hr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {bool &amp;&amp; &lt;Son&gt;&lt;/Son&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="redux" tabindex="-1">Redux <a class="header-anchor" href="#redux" aria-label="Permalink to &quot;Redux&quot;">​</a></h2><ul><li><p>插件安装</p><ol><li>Redux Toolkit：简化redux书写方式</li><li>react-redux：连接react redux的中间件</li></ol><p><code>yarn add @reduxjs/toolkit react-redux</code></p></li></ul><h4 id="在html文件使用-redux" tabindex="-1">在html文件使用 redux <a class="header-anchor" href="#在html文件使用-redux" aria-label="Permalink to &quot;在html文件使用 redux&quot;">​</a></h4><ol><li><p>定义一个 <code>reducer</code> 函数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function reducer = (state = {count:0}, action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(action === &#39;INCREMENT&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return {count: count +1}</span></span>
<span class="line"><span style="color:#A6ACCD;">	} else if (action === &#39;DECREMENT&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return {count: count - 1}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return state</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>通过<code>Redux.createStore</code>使用 <code>reducer</code> 函数生成<code>store</code>实例</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const store = Redux.createStore(reducer</span></span></code></pre></div></li><li><p>通过<code>store</code>实例的<code>subscribe</code>订阅数据变化</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">store.subscribe(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&#39;state更改了&#39;，store.getState())</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li><li><p>通过<code>store</code>实例的<code>dispatch</code>函数提交action更改状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">store.dispatch({</span></span>
<span class="line"><span style="color:#A6ACCD;"> type: &#39;INCREMENT&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li><li><p>通过 <code>store</code>实例的<code>getState</code>方法获取最新状态</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">store.getState()</span></span></code></pre></div></li></ol><h4 id="在-react-中使用" tabindex="-1">在 react 中使用 <a class="header-anchor" href="#在-react-中使用" aria-label="Permalink to &quot;在 react 中使用&quot;">​</a></h4><ol><li><p>使用 React Toolkit创建 store</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createSlice } from &#39;@reduxjs/toolkit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const countStore = createSlice({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;count&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  initialState: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  reducers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    increment (state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count++</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    decrement (state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count--</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const { increment, decrement } = countStore.actions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const reducer = countStore.reducer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export { increment, decrement }</span></span>
<span class="line"><span style="color:#A6ACCD;">export default reducer</span></span></code></pre></div></li><li><p>store/index/js文件导出</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { configureStore } from &quot;@reduxjs/toolkit&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import countReducer from &#39;./modules/countStore&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const store = configureStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">  reducer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: countReducer</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default store</span></span></code></pre></div></li><li><p>绑定到index.js文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Provider } from &#39;react-redux&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">root.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;React.StrictMode&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Provider store={store}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;App /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Provider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/React.StrictMode&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div></li><li><p>组件中使用</p><ul><li><p>获取，使用 <code>useSelector</code>方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { useSelector } from &quot;react-redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const { count } = useSelector(state =&gt; state.count)</span></span></code></pre></div></li><li><p>修改数据，使用useDispatch</p><ul><li><p>不传参</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { useSelector, useDispatch } from &quot;react-redux&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { increment, decrement } from &#39;./store/modules/countStore&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { count } = useSelector(state =&gt; state.count)</span></span>
<span class="line"><span style="color:#A6ACCD;">  const dispatch = useDispatch()</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; dispatch(decrement())}&gt;-&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      {count}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;button onClick={() =&gt; dispatch(increment())}&gt;+&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>传参，在定义的时候使用<code>.payload</code>接收</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const countStore = createSlice({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;count&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  initialState: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    count: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  reducers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    incrementNum (state, action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count += action.payload</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li><li><p>异步操作，在定义的时候，单独定义一个方法使用dispatch修改store</p><ul><li><p>定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createSlice } from &quot;@reduxjs/toolkit&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const channelStore = createSlice({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;channel&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  initialState: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    channelList: []</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  reducers: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setChannel (state, action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.channelList = action.payload</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const { setChannel } = channelStore.actions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const fetchGetChannel = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return async (dispatch) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { data: res } = await axios.get(&#39;http://geek.itheima.net/v1_0/channels&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    dispatch(setChannel(res.data.channels))</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export { fetchGetChannel }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const reducer = channelStore.reducer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default reducer</span></span></code></pre></div></li><li><p>调用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { fetchGetChannel } from &quot;./store/modules/channelStore&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const { channelList } = useSelector(state =&gt; state.channel)</span></span>
<span class="line"><span style="color:#A6ACCD;">useEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	dispatch(fetchGetChannel())</span></span>
<span class="line"><span style="color:#A6ACCD;">}, [])</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	{channelList.map(item =&gt; (&lt;li&gt;{item.name}&lt;/li&gt;))}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ul&gt;</span></span></code></pre></div></li></ul></li></ul></li></ul><h5 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h5><p>使用 <code>useSelector</code> 获取store数据</p><p>使用 <code>useDispatch</code> 获取dispatch方法</p><p>引入 <code>action</code> 对象然后用 <code>useDispatch</code> 修改数据</p></li></ol><h2 id="react-router" tabindex="-1">React Router <a class="header-anchor" href="#react-router" aria-label="Permalink to &quot;React Router&quot;">​</a></h2><h3 id="初始化配置" tabindex="-1">初始化配置 <a class="header-anchor" href="#初始化配置" aria-label="Permalink to &quot;初始化配置&quot;">​</a></h3><ol><li><p>安装</p><p><code>yarn add react-router-dom</code></p></li><li><p>使用</p><ul><li><p>router/index.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createBrowserRouter } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import Login from &#39;../page/Login&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Article from &#39;../page/Article&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = createBrowserRouter([</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/login&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Login/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/article&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Article/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default router</span></span></code></pre></div></li><li><p>index.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { RouterProvider } from &#39;react-router-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const root = ReactDOM.createRoot(document.getElementById(&#39;root&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">root.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;RouterProvider router={router}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/RouterProvider&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span></code></pre></div></li></ul></li></ol><h3 id="路由懒加载" tabindex="-1">路由懒加载 <a class="header-anchor" href="#路由懒加载" aria-label="Permalink to &quot;路由懒加载&quot;">​</a></h3><ol><li>使用react提供的<code>lazy</code>函数，异步引入组件</li><li>使用 <code>Suspense</code> 组件渲染异步组件，使用fallback在组件渲染之前显示的效果</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { createBrowserRouter } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { lazy, Suspense } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const Login = lazy(() =&gt; import(&#39;../page/Login&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const Article = lazy(() =&gt; import(&#39;../page/Article&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = createBrowserRouter([</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/login&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Suspense fallback={&#39;加载中&#39;}&gt;&lt;Login /&gt;&lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/article&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Suspense fallback={&#39;加载中&#39;}&gt;&lt;Article /&gt;&lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default router</span></span></code></pre></div><h3 id="路由导航" tabindex="-1">路由导航 <a class="header-anchor" href="#路由导航" aria-label="Permalink to &quot;路由导航&quot;">​</a></h3><h4 id="声明式导航" tabindex="-1">声明式导航 <a class="header-anchor" href="#声明式导航" aria-label="Permalink to &quot;声明式导航&quot;">​</a></h4><p>使用 <code>link</code> 标签</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { Link } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Link to=&#39;/article&#39;&gt;跳转到文章页&lt;/Link&gt;</span></span></code></pre></div><h4 id="编程式导航" tabindex="-1">编程式导航 <a class="header-anchor" href="#编程式导航" aria-label="Permalink to &quot;编程式导航&quot;">​</a></h4><p>使用 <code>useNavigate</code> 钩子获取导航方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { useNavigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const navigate = useNavigate()</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;button onClick={() =&gt; navigate(&#39;/login&#39;)}&gt;跳转登录页&lt;/button&gt;</span></span></code></pre></div><h4 id="传参" tabindex="-1">传参 <a class="header-anchor" href="#传参" aria-label="Permalink to &quot;传参&quot;">​</a></h4><ol><li><p>searchParams传参</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 传参</span></span>
<span class="line"><span style="color:#A6ACCD;">navigate(&#39;/login?userName=zs&amp;age=18&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 接收参数</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useSearchParams } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const [params] = useSearchParams()</span></span>
<span class="line"><span style="color:#A6ACCD;">const userName = params.get(&#39;userName&#39;)</span></span></code></pre></div></li><li><p>params传参</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 传参</span></span>
<span class="line"><span style="color:#A6ACCD;">navigate(&#39;/login/1001&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 路由修改需要path</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/login/:id&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Login /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 接收</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useParams } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const params = useParams()</span></span>
<span class="line"><span style="color:#A6ACCD;">params.id</span></span></code></pre></div></li></ol><h4 id="嵌套路由配置" tabindex="-1">嵌套路由配置 <a class="header-anchor" href="#嵌套路由配置" aria-label="Permalink to &quot;嵌套路由配置&quot;">​</a></h4><p>routes使用<code>children</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/article&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Article /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: &#39;/article/son1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        element: &lt;ArticleSon&gt;&lt;/ArticleSon&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span></code></pre></div><p>父组件用 <code>Outlet</code>组件渲染</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Outlet&gt;&lt;/Outlet&gt;</span></span></code></pre></div><h5 id="默认路由" tabindex="-1">默认路由 <a class="header-anchor" href="#默认路由" aria-label="Permalink to &quot;默认路由&quot;">​</a></h5><p>去掉<strong>children下的path</strong>，使用<strong>index</strong>，可以当路由为父组件的<strong>path</strong>时，默认渲染子路由</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/article&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Article /&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        index: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        element: &lt;ArticleSon1&gt;&lt;/ArticleSon1&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: &#39;/article/son2&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        element: &lt;ArticleSon2&gt;&lt;/ArticleSon2&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>默认会显示<code>Article</code>和<code>ArticleSon1</code></p><h5 id="_404路由" tabindex="-1">404路由 <a class="header-anchor" href="#_404路由" aria-label="Permalink to &quot;404路由&quot;">​</a></h5><p>在routes末尾使用<code>*</code>来</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;NotFound /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h5 id="router两种路由模式设置" tabindex="-1">Router两种路由模式设置 <a class="header-anchor" href="#router两种路由模式设置" aria-label="Permalink to &quot;Router两种路由模式设置&quot;">​</a></h5><p>history 和 hash 模式</p><p>分别使用 <code>createBrowserRouter</code> 和 <code>createHashRouter</code> 创建router实例</p><h2 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h2><h3 id="路由懒加载-1" tabindex="-1">路由懒加载 <a class="header-anchor" href="#路由懒加载-1" aria-label="Permalink to &quot;路由懒加载&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { lazy, Suspense } from &#39;react&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const AuthRoute = lazy(() =&gt; import(&#39;@/components/AuthRoute&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const Layout = lazy(() =&gt; import(&#39;@/pages/Layout/Layout.js&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const Login = lazy(() =&gt; import(&#39;@/pages/Login/Login&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const Home = lazy(() =&gt; import(&#39;@/pages/Home/Home.js&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const Article = lazy(() =&gt; import(&#39;@/pages/Article/Article.js&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">const Publish = lazy(() =&gt; import(&#39;@/pages/Publish/Publish.js&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const routes = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Suspense fallback={&#39;加载中&#39;}&gt;&lt;AuthRoute&gt;&lt;Layout /&gt;&lt;/AuthRoute&gt;&lt;/Suspense&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    children: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        index: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        element: &lt;Suspense fallback={&#39;加载中&#39;}&gt;&lt;Home /&gt;&lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: &#39;article&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        element: &lt;Suspense fallback={&#39;加载中&#39;}&gt;&lt;Article /&gt;&lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: &#39;publish&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        element: &lt;Suspense fallback={&#39;加载中&#39;}&gt;&lt;Publish /&gt;&lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/login&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    element: &lt;Suspense&gt;&lt;Login /&gt;&lt;/Suspense&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">export default routes</span></span></code></pre></div><h3 id="打包优化" tabindex="-1">打包优化 <a class="header-anchor" href="#打包优化" aria-label="Permalink to &quot;打包优化&quot;">​</a></h3><h4 id="source-map-explorer-查看包体积" tabindex="-1"><code>source-map-explorer</code> 查看包体积 <a class="header-anchor" href="#source-map-explorer-查看包体积" aria-label="Permalink to &quot;\`source-map-explorer\` 查看包体积&quot;">​</a></h4><ol><li><p>安装包</p><p><code>yarn add source-map-explorer</code></p></li><li><p>配置命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;analyze&quot;: &quot;source-map-explorer &#39;build/static/js/*&#39;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span></code></pre></div></li><li><p>执行命令及效果</p><p><code>yarn run analyze</code></p><p><img src="`+e+`" alt="image-20240104144815175"></p></li></ol><h4 id="cdn优化" tabindex="-1">CDN优化 <a class="header-anchor" href="#cdn优化" aria-label="Permalink to &quot;CDN优化&quot;">​</a></h4><ol><li>打包时排除 插件</li><li>使用CDN引入插件</li></ol><ul><li><p>cacro.config.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 扩展webpack的配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// 引入辅助函数</span></span>
<span class="line"><span style="color:#A6ACCD;">const { whenProd, getPlugin, pluginByName } = require(&#39;@craco/craco&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// webpack 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">	webpack: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 配置别名</span></span>
<span class="line"><span style="color:#A6ACCD;">		alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// 约定：使用 @ 表示 src 文件所在路径</span></span>
<span class="line"><span style="color:#A6ACCD;">			&#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 配置CDN</span></span>
<span class="line"><span style="color:#A6ACCD;">		configure: (webpackConfig) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			let cdn = {</span></span>
<span class="line"><span style="color:#A6ACCD;">				js: []</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">			whenProd(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">				// key: 不参与打包的包(由dependencies依赖项中的key决定)</span></span>
<span class="line"><span style="color:#A6ACCD;">				// value: cdn文件中 挂载于全局的变量名称 为了替换之前在开发环境下</span></span>
<span class="line"><span style="color:#A6ACCD;">				webpackConfig.externals = {</span></span>
<span class="line"><span style="color:#A6ACCD;">					react: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">					&#39;react-dom&#39;: &#39;ReactDOM&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">				}</span></span>
<span class="line"><span style="color:#A6ACCD;">				// 配置现成的cdn资源地址</span></span>
<span class="line"><span style="color:#A6ACCD;">				// 实际开发的时候 用公司自己花钱买的cdn服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">				cdn = {</span></span>
<span class="line"><span style="color:#A6ACCD;">					js: [</span></span>
<span class="line"><span style="color:#A6ACCD;">						&#39;https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">						&#39;https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">					]</span></span>
<span class="line"><span style="color:#A6ACCD;">				}</span></span>
<span class="line"><span style="color:#A6ACCD;">			})</span></span>
<span class="line"><span style="color:#A6ACCD;">			// 通过 htmlWebpackPlugin插件 在public/index.html注入cdn资源url</span></span>
<span class="line"><span style="color:#A6ACCD;">			const { isFound, match } = getPlugin(</span></span>
<span class="line"><span style="color:#A6ACCD;">				webpackConfig,</span></span>
<span class="line"><span style="color:#A6ACCD;">				pluginByName(&#39;HtmlWebpackPlugin&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">			)</span></span>
<span class="line"><span style="color:#A6ACCD;">			if (isFound) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				// 找到了HtmlWebpackPlugin的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">				match.options.cdn = cdn</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">			return webpackConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>public/index.html</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- 动态插入cdn --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;% htmlWebpackPlugin.options.cdn.js.forEach(cdnURL=&gt; { %&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script src=&quot;&lt;%= cdnURL %&gt;&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;% }) %&gt;</span></span></code></pre></div></li></ul><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><h3 id="classnames优化类名控制" tabindex="-1">classnames优化类名控制 <a class="header-anchor" href="#classnames优化类名控制" aria-label="Permalink to &quot;classnames优化类名控制&quot;">​</a></h3><p>​ 网址：<a href="https://www.npmjs.com/package/classnames" target="_blank" rel="noreferrer">https://www.npmjs.com/package/classnames</a></p><ol><li><p>下载</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install classnames</span></span></code></pre></div></li><li><p>导入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const classNames = require(&#39;classnames&#39;)</span></span></code></pre></div><p>或者</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import classNames from &#39;classnames&#39;</span></span></code></pre></div></li><li><p>使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">classNames(&#39;foo&#39;, { bar: true }); // =&gt; &#39;foo bar&#39;</span></span></code></pre></div></li></ol><h3 id="uuid生成唯一随机数" tabindex="-1">uuid生成唯一随机数 <a class="header-anchor" href="#uuid生成唯一随机数" aria-label="Permalink to &quot;uuid生成唯一随机数&quot;">​</a></h3><p>网址：<a href="https://github.com/uuidjs/uuid" target="_blank" rel="noreferrer">https://github.com/uuidjs/uuid</a></p><ol><li><p>下载</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install uuid</span></span></code></pre></div></li><li><p>导入</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { v4 as uuidv4 } from &#39;uuid&#39;;</span></span></code></pre></div></li><li><p>使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uuidv4()</span></span></code></pre></div></li></ol><h3 id="craco" tabindex="-1">craco <a class="header-anchor" href="#craco" aria-label="Permalink to &quot;craco&quot;">​</a></h3><ol><li><p>下载</p><p><code>npm i -D @craco/craco</code></p></li><li><p>在根目录创建文件</p><p>craco.config.json</p></li><li><p>配置文件添加路径解析配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	webpack:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		alias:{</span></span>
<span class="line"><span style="color:#A6ACCD;">			&#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>包文件中配置启动和打包命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;start&quot;: &quot;react-scripts start&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;build&quot;: &quot;react-scripts build&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">// 更改为</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;start&quot;: &quot;craco start&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;build&quot;: &quot;craco build&quot;,</span></span></code></pre></div></li></ol><ul><li><p>vscode 联想路径配置</p><ol><li><p>根目录新增 <code>jsconfig.json</code> 文件</p></li><li><p>添加路径配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;baseUrl&quot;: &quot;./&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@/*&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;src/*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol></li></ul><h3 id="json-server-实现数据-mock" tabindex="-1">json-server 实现数据 Mock <a class="header-anchor" href="#json-server-实现数据-mock" aria-label="Permalink to &quot;json-server 实现数据 Mock&quot;">​</a></h3><ol><li><p>项目中安装json-server</p><p><code>yarn add json-server</code></p></li><li><p>准备一个json文件</p><p><strong>server/data.json</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;張三&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;id&quot;: &quot;2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;李四&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li><li><p>添加启动命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&quot;server&quot;: &quot;json-server ./server/data.json --port 8888&quot;</span></span></code></pre></div></li><li><p>访问接口进行测试</p></li></ol><h3 id="初始化样式的三方库" tabindex="-1">初始化样式的三方库 <a class="header-anchor" href="#初始化样式的三方库" aria-label="Permalink to &quot;初始化样式的三方库&quot;">​</a></h3><p><code>Normalize.css</code></p><h3 id="富文本编辑器" tabindex="-1">富文本编辑器 <a class="header-anchor" href="#富文本编辑器" aria-label="Permalink to &quot;富文本编辑器&quot;">​</a></h3><p><code>react-quill</code> react18需要使用特定版本react-quill@2.0.0-beta.2</p><h3 id="本地预览" tabindex="-1">本地预览 <a class="header-anchor" href="#本地预览" aria-label="Permalink to &quot;本地预览&quot;">​</a></h3><p><code>serve</code></p><pre><code>1. 安装

\`yarn add serve\`

2. 运行

\`serve -s build\`
</code></pre><h2 id="class-api-旧版不推荐" tabindex="-1">Class Api（旧版不推荐） <a class="header-anchor" href="#class-api-旧版不推荐" aria-label="Permalink to &quot;Class Api（旧版不推荐）&quot;">​</a></h2><h4 id="基础模板" tabindex="-1">基础模板 <a class="header-anchor" href="#基础模板" aria-label="Permalink to &quot;基础模板&quot;">​</a></h4><p><img src="`+p+'" alt="image-20240104175134197"></p><h3 id="父传子-1" tabindex="-1">父传子 <a class="header-anchor" href="#父传子-1" aria-label="Permalink to &quot;父传子&quot;">​</a></h3><p><img src="'+t+'" alt="image-20240104180411670"></p><h3 id="子传父-1" tabindex="-1">子传父 <a class="header-anchor" href="#子传父-1" aria-label="Permalink to &quot;子传父&quot;">​</a></h3><p><img src="'+o+`" alt="image-20240104180611067"></p><h3 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h3><ol><li>componentDisMount（组件渲染完毕）</li><li>componentWillUnmount（组件卸载）</li></ol><h2 id="zustand-redux替代品" tabindex="-1">zustand（Redux替代品） <a class="header-anchor" href="#zustand-redux替代品" aria-label="Permalink to &quot;zustand（Redux替代品）&quot;">​</a></h2><ol><li><p>安装</p><p><code>yarn add zustand</code></p></li><li><p>使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import {create} from &#39;zustand&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建store</span></span>
<span class="line"><span style="color:#A6ACCD;">const useStore = create((set) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	return {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 定义状态数据</span></span>
<span class="line"><span style="color:#A6ACCD;">		count: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 修改状态数据方法</span></span>
<span class="line"><span style="color:#A6ACCD;">		inc: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// 需要原数据</span></span>
<span class="line"><span style="color:#A6ACCD;">			set((state)=&gt; ({count: state.count + 1}))</span></span>
<span class="line"><span style="color:#A6ACCD;">			// 不需要数据，直接修改</span></span>
<span class="line"><span style="color:#A6ACCD;">			set({count:100})</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 绑定store</span></span>
<span class="line"><span style="color:#A6ACCD;">function App () {</span></span>
<span class="line"><span style="color:#A6ACCD;">const { count, inc } = useStore()</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">    	&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    		this is app</span></span>
<span class="line"><span style="color:#A6ACCD;">    		&lt;button onClick={inc}&gt;{count}&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	&lt;/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ol><p>注意：</p><ul><li>函数必须返回一个对象，存放数据和方法</li><li>参数set是用来修改数据的方法</li></ul><h4 id="切片模式" tabindex="-1">切片模式 <a class="header-anchor" href="#切片模式" aria-label="Permalink to &quot;切片模式&quot;">​</a></h4><ul><li><p>count切片</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const createCountStore = ((set) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	return {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 定义状态数据</span></span>
<span class="line"><span style="color:#A6ACCD;">		count: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 修改状态数据方法</span></span>
<span class="line"><span style="color:#A6ACCD;">		inc: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// 需要原数据</span></span>
<span class="line"><span style="color:#A6ACCD;">			set((state)=&gt; ({count: state.count + 1}))</span></span>
<span class="line"><span style="color:#A6ACCD;">			// 不需要数据，直接修改</span></span>
<span class="line"><span style="color:#A6ACCD;">			set({count:100})</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li><li><p>channel切片</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const createChannelStore = ((set) =&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	return {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 定义状态数据</span></span>
<span class="line"><span style="color:#A6ACCD;">		channel: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 修改状态数据方法</span></span>
<span class="line"><span style="color:#A6ACCD;">		setChannel: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			set({channel:[1,2,3]})</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li><li><p>组合切片</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const useStore = create((...a) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	return {</span></span>
<span class="line"><span style="color:#A6ACCD;">		...createCountStore(...a),</span></span>
<span class="line"><span style="color:#A6ACCD;">		...createChannelStore(...a)</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></li></ul>`,156),r=[i];function C(A,d,y,u,D,g){return a(),n("div",null,r)}const b=s(c,[["render",C]]);export{m as __pageData,b as default};
