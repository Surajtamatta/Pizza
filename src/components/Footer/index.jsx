import React from 'react'
import { FingerData,ResourceData,AboutData,ContactData,SocialData } from '../../data/Footer'
import "../../style/Footer/footerStyle.css";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="Wrapper">
        <div className="ContainerOne">
                <div className="PagesLink">
                        {FingerData.map((item)=>{
                          return(
                              <a className="Links" key={item.id} href={item.Url}>{item.Title}</a>
                          )})}
                </div>
                <div className="ResourceLink">
                        {ResourceData.map((item)=>{
                          return(
                              <a className="Links" key={item.id} href={item.Url}>{item.Title}</a>
                          )})}
                </div >
                <div className="AboutLink">
                        {AboutData.map((item)=>{
                          return(
                              <a className="Links" key={item.id} href={item.Url}>{item.Title}</a>
                          )})}
                </div>       
        </div >
        <div className="ContainerTwo">
          <div className="Contact">
                        {ContactData.map((item)=>{
                            return(
                              <a className="ContactLinks"  key={item.id} href={item.Url} ><i><item.Icon/></i><h1 className="Text">{item.Text}</h1></a>
                          )})}
          </div>
          <div className="Social">
                        {SocialData.map((item)=>{
                            return(
                              <a className="SocialLinks"  key={item.id} href={item.Url} ><i><item.Icon/></i></a>
                        )})}
          </div>
        </div>
        </div>
        <h1 className="CopyRight">@copyright. play 2022</h1>
    </div>
  )
}

export default Footer
