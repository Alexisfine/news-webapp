import React, {Suspense} from 'react'
import {Routes, Route, useNavigate, useLocation, useParams, 
    useSearchParams} from 'react-router-dom'
import routes from './routes'
import {Mask, DotLoading} from 'antd-mobile'

/* Global rendering */
const Element = function Element(props) {
    let {component : Component, meta} = props
    // Change page title
    let {title = "News WebApp"} = meta || {}
    document.title = title

    // Obtain router data and pass it to component
    const navigate = useNavigate(),
          location = useLocation(),
          params = useParams(),
          [usp] = useSearchParams()
    return <Component nagivate={navigate} location={location} params={params} usp={usp}/> 
}
export default function RouterView() {
    return (
        <Suspense fallback={
            <Mask visible={true} opacity="thick">
                <DotLoading color='white'/>
            </Mask>}>
            <Routes>
                {routes.map((item) => {
                    let {name, path} = item
                    return <Route key={name} path={path} element={<Element {...item} />}/>
                })}
            </Routes>
        </Suspense>
    )
}