import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

export default function Home(props) {
  const {t} = useTranslation();
  const toggleVideo = () => {
    var x = document.getElementById("videoDiv");
    var y = document.querySelector("#loader-wrapper");
    y.style.display = "block";
    setTimeout(() => {
      y.style.display = "none";
    }, 1500);
    setInterval(() => {
      x.style.display = "flex";
    }, 1501);
  }
  return (
    <main>
      <Header />
        <div id="__next">
          <div className="menu-sidebar ">
            <div className="bg-white main-side-menu"><a className=" text-decoration-none d-flex p-3 font-weight-semi border-bottom align-items-center" href="/"><img src="logo.svg" className="mr-2" style={{ borderRadius: '100%', border: '1px solid' }} height="25px" width="25px" /><small className="text-primary-link">Youtube Shorts
              Downloader</small></a>
              <ul className="m-0 p-0">
                <li className="py-2  px-4 text-dark d-block border-bottom">English</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">German</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Español</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Français</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">हिन्दी / Hindī</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Indonesian</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Italiano</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">日本語</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">한국어</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Myanmar (မြန်မာ)</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Malay</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Dutch</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Filipino</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Português</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Русский</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">ไทย</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Türkçe</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">Tiếng Việt</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">简体中文</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">繁體中文</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">العربية</li>
                <li className="py-2  px-4 text-dark d-block border-bottom">বাঙালি</li>
              </ul>
            </div>
            <div className="sidebar-outerlayer" />
          </div>
          <section className>
            <hr className="jsx-3667081484 m-0" />
            <div className="jsx-3667081484">
              <div className="jsx-3667081484 container centered"><ins className="adsbygoogle" style={{ display: 'inline-block', width: '320px', height: '100px' }} data-ad-client="ca-pub-3476621303569503" data-ad-slot={5118507655} /></div>
              <div className="jsx-3667081484 px-3 py-2">
                <div className="jsx-3667081484 container py-2 bg-light-primary  hero-container text-dark"><br className="jsx-3667081484" />
                  <h1 className="jsx-3667081484 text-center m-0 main-heading "><a className="jsx-3667081484 text-dark text-decoration-none">{t('home:main_title')}</a></h1>
                  <p className="jsx-3667081484 text-center   font-weight-semi text-dark">{t('home:sub_title')}</p>

                  <div className="jsx-3667081484 row justify-content-center ">
                    <div className="jsx-3667081484 col-md-8 mb-2"><input type="search" placeholder="Paste your Youtube link here" className="jsx-3667081484 form-control input" /></div>
                    <div className="jsx-3667081484"><button className="jsx-3667081484 btn-main  btn" onClick={toggleVideo}>{t('home:get_btn')}</button>

                    </div>

                  </div><br className="jsx-3667081484" />
                  <div id="loader-wrapper" className="hidden">
                    <div />
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '#fff', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                      <g transform="translate(20 50)">
                        <circle cx={0} cy={0} r={6} fill="#e15b64">
                          <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                        </circle>
                      </g><g transform="translate(40 50)">
                        <circle cx={0} cy={0} r={6} fill="#f8b26a">
                          <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                        </circle>
                      </g><g transform="translate(60 50)">
                        <circle cx={0} cy={0} r={6} fill="#abbd81">
                          <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                        </circle>
                      </g><g transform="translate(80 50)">
                        <circle cx={0} cy={0} r={6} fill="#81a3bd">
                          <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" />
                        </circle>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="container">
                <div id="search-result">
                  <div className="detail">
                    <div className="thumbnail" id="videoDiv"><input type="hidden" id="video_id" defaultValue="TWQn896YyHs" />
                      <div className="thumb-img"><img src="https://i.ytimg.com/vi/TWQn896YyHs/0.jpg" width="100%" alt="yt1s youtube downloader" /></div>
                      <div className="content">
                        <div className="clearfix">
                          <h3>Jurassic World Dominion - Official Trailer 4K</h3>
                          <p>Indoraptor Prototype</p>
                          <p className="mag0">2:51</p>
                          <div className="magT10">
                            <div className="flex block-xs"><select className="form-control form-control-small" id="formatSelect">
                              <optgroup label="mp4">
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cUErI+d3DCBR+3j+neEPCGBg7V+znA=">
                                  MP4 video </option>
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cVU6cPC3DCBR+3j+neEPCGBg7V+znA=">
                                  1080p (52.3 MB) </option>
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cVS68uOkTGCWvHn4mGJJz6EhvhS1Q==">
                                  720p (20.8 MB) </option>
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cVR4cuOkTGCWvHn4mGJJz6EhvhS1Q==">
                                  480p (13.1 MB) </option>
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cVW78uOkTGCWvHn4mGJJz6EhvhS1Q==">
                                  360p (11.7 MB) </option>
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cVX7cuC3DCBR+3j+neEPCGBg7V+znA=">
                                  240p (5.5 MB) </option>
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v2cVU7c+C3DCBR+3j+neEPCGBg7V+znA=">
                                  144p (4 MB) </option>
                              </optgroup>
                              <optgroup label="3gp">
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5gD4ncVU7c+C3DCBR+3j+neEPCGBg7V+znA=">
                                  144p </option>
                              </optgroup>
                              <optgroup label="mp3">
                                <option value="0+S6VROCLb2lR9LUXJc8mhZlPRF1HVXK5l7v3sVU68OOkTGCWvHn4mGJJz6EhvhS1Q==">
                                  MP3 128kbps (2.6 MB) </option>
                              </optgroup>
                            </select><button id="btn-action" className="btn-blue-small form-control" type="button" onclick="convertFile(0)">Get link</button><span id="mesg-convert" className="form-control mesg-convert hidden"> <span className="lds-dual-ring" /> Converting, please
                              wait...</span><a id="asuccess" className="form-control mesg-convert success hidden" rel="nofollow" href="#"> Download </a> &nbsp; &nbsp;<a id="cnext" className="form-control mesg-convert hidden" href="https://yt1s.com/en243">Convert next</a><button id="breload" className="form-control btn-blue-small hidden" rel="nofollow" onclick="window.location.reload();"> Get link </button>
                              </div>
                            <div className="addthis_inline_share_toolbox" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section></div>
        <div className=" py-5">
          <div className="container">
            <div className="pb-3 ">
              <h2 className="text-center h2 ">{t('home:2nd_title')}</h2>
              <p className="text-dark  text-center">{t('home:2nd_sub_title')}</p>
            </div>
            <div className="row justify-content-around mb-5 px-2">
              <div className="col-md-3 mb-3 px-2">
                <div className="jsx-3227403536 post-card ">
                  <div className="jsx-3227403536 post-image undefined"><img src="/fast.svg" alt="Fast Downloading" className="jsx-3227403536" /></div>
                  <div className="jsx-3227403536 post-content">
                    <h3 className="jsx-3227403536">{t('home:fast_downloading')}</h3>
                    <p className="jsx-3227403536">{t('home:fast_downloading_msg')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 px-2">
                <div className="jsx-3227403536 post-card ">
                  <div className="jsx-3227403536 post-image undefined"><img src="/loop.svg" alt="No Limit" className="jsx-3227403536" /></div>
                  <div className="jsx-3227403536 post-content">
                    <h3 className="jsx-3227403536">{t('home:no_limit')}</h3>
                    <p className="jsx-3227403536">{t('home:no_limit_msg')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 px-2">
                <div className="jsx-3227403536 post-card ">
                  <div className="jsx-3227403536 post-image undefined"><img src="/shield.svg" alt="Fully Secure" className="jsx-3227403536" /></div>
                  <div className="jsx-3227403536 post-content">
                    <h3 className="jsx-3227403536">{t('home:fully_secure')}</h3>
                    <p className="jsx-3227403536">{t('home:fully_secure_msg')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-around mb-5 px-2">
              <div className="col-md-3 mb-3 px-2">
                <div className="jsx-3227403536 post-card ">
                  <div className="jsx-3227403536 post-image undefined"><img src="/ux-design.svg" alt="Select Quality" className="jsx-3227403536" /></div>
                  <div className="jsx-3227403536 post-content">
                    <h3 className="jsx-3227403536">{t('home:select_quality')}</h3>
                    <p className="jsx-3227403536">{t("home:select_quality_msg")}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 px-2">
                <div className="jsx-3227403536 post-card ">
                  <div className="jsx-3227403536 post-image undefined"><img src="/instructions.svg" alt="User-Friendly" className="jsx-3227403536" /></div>
                  <div className="jsx-3227403536 post-content">
                    <h3 className="jsx-3227403536">{t('home:user-friendly')}</h3>
                    <p className="jsx-3227403536">{t('home:user-friendly-msg')}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3 px-2">
                <div className="jsx-3227403536 post-card ">
                  <div className="jsx-3227403536 post-image undefined"><img src="/computing.svg" alt="Free to Use" className="jsx-3227403536" /></div>
                  <div className="jsx-3227403536 post-content">
                    <h3 className="jsx-3227403536">{t('home:free_to_use')}</h3>
                    <p className="jsx-3227403536">{t('home:free_to_use_msg')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className=" py-5">
          <div className="container"><ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-3476621303569503" data-ad-slot={3627285369} data-ad-format="auto" data-full-width-responsive="true" /></div><br />
          <div className="pb-3  container text-dark">
            <h2 className="text-center h2">{t('home:title_3rd')}</h2>
            <p className="text-dark  text-center ">{t('home:title_3rd_desc')}</p>
            <div className=" text-center">
              <p className="text-dark font-weight-bold">{t('home:share_site')}...</p><a href="https://www.facebook.com/sharer/sharer.php?u=https://ytshorts.savetube.me" target="_blank" className="mx-3"><img src="/facebook.svg" width={30} /></a><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ytshorts.savetube.me" target="_blank" className="mx-3"><img src="/linkedin.svg" width={30} /></a><a href="https://twitter.com/share?url=https://ytshorts.savetube.me" target="_blank" className="mx-3"><img src="/twitter.svg" width={30} /></a>
              <a href="whatsapp://send?text=https://ytshorts.savetube.me" data-action="share/whatsapp/share" target="_blank" className="mx-3 whatsapp-share-btn"><img src="/whatsapp.svg" width={30} /></a>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: "\n        .whatsapp-share-btn {\n            display: none;\n        }\n\n        @media screen and (max-width: 600px) {\n            .whatsapp-share-btn {\n                display: inline;\n            }\n        }\n    " }} />
        <hr className="m-0" />
        <div className=" py-5">
          <div className="container">
            <div className="pb-3 ">
              <h2 className="text-center h2 ">{t('home:what_is')}</h2>
            </div>
            <div className="row justify-content-around mb-2 px-2 ">
              <p>{t('home:what_is_desc_1')} <strong>{t('home:what_is_desc_2')} </strong>{t('home:what_is_desc_3')} <strong>YouTube</strong> app.</p>
              <p className="m-0">{t('home:what_is_desc_4')}<strong> {t('home:what_is_desc_5')}.</strong></p>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className=" py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 text-center"><img src="/create-a-short.jpg" width="100%" alt="create a youtube short" /></div>
              <div className="col-md-8">
                <div className="py-3 ">
                  <h2 className=" h2 ">{t('home:how_to')}</h2>
                </div>
                <p>{t('home:how_to_desc_1')}</p>
                <p className="font-weight-bold">{t('home:how_to_pt_1')}
                  {/* */}
                </p>
                <p className="font-weight-bold">{t('home:how_to_pt_2')}
                  {/* */}
                </p>
                <p className="font-weight-bold">{t('home:how_to_pt_3')}
                  {/* */}
                </p>
                <p>{t('home:how_to_pt_4')}</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className=" py-5">
          <div className="container">
            <div className="pb-3 ">
              <h2 className="m-0 h2 text-center">{t('home:how_to_down')}</h2>
            </div>
            <p>{t('home:how_to_down_desc')}</p>
            <p className="font-weight-bold">{t('home:how_to_down_desc_1')}</p>
            <p className="font-weight-bold">{t('home:how_to_down_desc_2')}</p><img src="/first_shorts.jpg" className="my-3 px-2" height="300px" width="150px" alt="download youtube shorts" /><img src="/copylink.jpg" className="my-3 px-2" width="150px" height="300px" alt="download youtube shorts copy link" />
            <p className="font-weight-bold">{t('home:how_to_down_desc_3')}</p>
            <p className="font-weight-bold">{t('home:how_to_down_desc_4')}</p>
            <p>{t('home:how_to_down_desc_be')}</p>
          </div>
        </div>
        <hr className="m-0" />
        <div className=" py-5">
          <div className="pb-3  container text-dark">
            <h3 className="text-center h2  mb-5">{t('home:faq')}</h3>
            <div className="card mb-3">
              <h5 className="card-header text-white bg-main-primary btn text-left">{t('home:faq_1')}</h5>
              <div className="card-body">
                <p className="card-text">{t('home:faq_1_ans')}</p>
              </div>
            </div>
            <div className="card mb-3">
              <h5 className="card-header text-white bg-main-primary btn text-left">{t('home:faq_2')}</h5>
              <div className="card-body">
                <p className="card-text">{t('home:faq_2_ans')}</p>
              </div>
            </div>
            <div className="card mb-3">
              <h5 className="card-header text-white bg-main-primary btn text-left">{t('home:faq_3')}</h5>
              <div className="card-body">
                <p className="card-text">{t('home:faq_3_ans')}</p>
              </div>
            </div>
            <div className="card mb-3">
              <h5 className="card-header text-white bg-main-primary btn text-left"> {t('home:faq_4')}</h5>
              <div className="card-body">
                <p className="card-text">{t('home:faq_4_ans')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      <Footer />
    </main>
  );
}
