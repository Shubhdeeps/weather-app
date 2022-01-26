import '../stylesheet/layout.css'


export default function Layout({ children }){
    return<div className="layout">
        {children}
        <style jsx>{`
        
        `}</style>
    </div>
}