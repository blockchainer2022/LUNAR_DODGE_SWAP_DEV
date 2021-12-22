/* eslint-disable no-unused-vars */
import React from "react";
import "./selectWalletPopup.css";
import Metamask from "../../assets/images/metamask.png";
import BNB from "../../assets/images/bnb-logo.svg";
import TWT from "../../assets/images/trustwallet.png";
const Index = ({
  open,
  onClose,
  title,
  text,
  metaMaskHandler,
  account,
  loadWalleConnect,
}) => {
  const metaHandler = () => {
    localStorage.setItem("account", "metamask");
    metaMaskHandler();
    onClose((prev) => !prev);
  };

  const walletHandler = () => {
    localStorage.setItem("account", "walletconnect");
    loadWalleConnect();
    onClose((prev) => !prev);
  };

  const disConnect = () => {
    // localStorage.setItem("account", "metamask");
    localStorage.removeItem("account");
    window.location.reload();
    onClose((prev) => !prev);
  };
  const popupHandler = (e) => {
    if (e.target.classList.contains("walletModal")) {
      onClose((prev) => !prev);
    }
  };
  return (
    <>
      <aside
        className="bn-onboard-custom  svelte-rntogh walletModal "
        style={open ? { zIndex: "100" } : { display: "none" }}
        onClick={popupHandler}
      >
        <section
          className="bn-onboard-custom bn-onboard-modal-content svelte-rntogh bn-onboard-dark-mode relative"
          style={{ width: "60vw" }}
        >
          <header className="bn-onboard-custom bn-onboard-modal-content-header svelte-8i8o6j justify-between">
            <div className="flex items-center">
              <div className="bn-onboard-custom bn-onboard-modal-content-header-icon svelte-8i8o6j bn-onboard-dark-mode-background">
                <Image />
              </div>
              <h3
                className="bn-onboard-custom bn-onboard-modal-content-header-heading svelte-8i8o6j"
                style={{ color: "#fff" }}
              >
                {title}
              </h3>
            </div>
            <div className="closeBtn" onClick={() => onClose((prev) => !prev)}>
              <i className="fas fa-times"></i>
            </div>
          </header>{" "}
          <section className="bn-onboard-custom bn-onboard-modal-selected-wallet svelte-mi6ahc">
            <p
              style={{
                fontSize: "0.889rem",
                fontFamily: "inherit",
                margin: "0.889rem 0",
              }}
            >
              {text}
            </p>
            {!account ? (
              <div className="wallet-list">
                <button onClick={metaHandler}>
                  <img src={Metamask} alt="" />
                  <span>Metamask</span>
                </button>
                <button className="disabled">
                  <WalletConnectImage />
                  <div>
                    <span className="text-xs">Wallet Connect</span>
                    <span className="soon">(Coming Soon)</span>
                  </div>
                </button>
                <button className="disabled">
                  <img src={BNB} alt="" />
                  <div>
                    <span className="text-xs"> Binance Wallet </span>
                    <span className="soon"> (coming soon)</span>
                  </div>
                </button>
                <button className="disabled">
                  <img src={TWT} alt="" />
                  <div>
                    <span className="text-xs">TrustWallet </span>
                    <span className="soon">(coming soon for IOS)</span>
                  </div>
                </button>
              </div>
            ) : null}

            <footer
              className="bn-onboard-custom bn-onboard-modal-selected-wallet-footer svelte-mi6ahc"
              style={{ justifyContent: "center", marginTop: "30px" }}
            >
              {account ? (
                <div className="flex flex-col sm:flex-row items-center">
                  <button onClick={disConnect} className="mt-4">
                    Yes
                  </button>
                  <button
                    onClick={() => onClose((prev) => !prev)}
                    className="mt-4 sm:ml-4"
                  >
                    No
                  </button>
                </div>
              ) : null}
            </footer>
          </section>
        </section>
      </aside>
    </>
  );
};

export default Index;

const Image = () => (
  <svg
    height={18}
    viewBox="0 0 19 18"
    width={19}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor" fillRule="evenodd">
      <path
        d="m15.7721618.00006623h-13.27469839c-.86762065
		0-1.48592681.3078086-1.89741046.76113193-.40615823.44745064-.60839063
		1.04661988-.59978974
		1.64464107.00029187.005124.00040335.01025653.00033423.01538822v3.66899811c.06682404-.11685776.14162507-.22938827.22533894-.33628895.36778845-.46959466.90812952-.82116145
		1.61866132-.95623339v-.59093422c0-.55214353.17649657-1.05790163.47278173-1.43388645.29630745-.37596275.72292065-.62513272
		1.19969088-.62513272h11.23546239c.4765474 0 .9032497.24850764
		1.199624.62424961.2963743.37574196.4728709.88161045.4728709
		1.43476956v.4652895c.5235626-.11047728.9266682-.35445897
		1.2246022-.6733727.4116397-.44060653.6210469-1.03392515.6210469-1.63015804s-.2094072-1.18955151-.6210469-1.63018011c-.4116396-.44060653-1.0238627-.73834765-1.877468-.73834765z"
      />
      <path
        d="m14.6096047 2.57151734h-11.21914267c-.32073002
		0-.6185428.16561433-.84722564.45769739s-.37782286.70763901-.37782286
		1.16808814v.53953924c.06265527-.0036172.12640078-.00570319.19125878-.00616921.00518482-.00032924.01037961-.00047727.01557482-.00044383h.01326084
		13.24215593c.0706652 0
		.1395281-.00228571.2069226-.00630235v-.52671262c0-.46164746-.1491623-.87711464-.3777561-1.16884264-.2286161-.29175019-.5263622-.45694289-.8473147-.45694289z"
      />
      <path
        d="m18.2706767
		3.92481203c-.0857195.13278047-.1837832.25906993-.2945478.376829-.495466.52680184-1.2439236.87400468-2.2045296.87400468h-13.26144765c-.93286471
		0-1.53628777.33766369-1.93268731.8403655s-.57746434
		1.18877443-.57746434
		1.87212785v.41252951c.13725808.14817467.29229732.20450824.50016754.23211693.21170276.02811305.46814809.01403459.74212947.02170977h5.25979191c.94146564
		0 1.67588548.36084271 2.15878435.90341155.48289887.54259078.7188669
		1.25649138.7188669 1.96738768s-.23596803 1.4247969-.7188669
		1.9673877c-.48289887.5425689-1.21731871.9033896-2.15878435.9033896h-5.25979191c-.25038458
		0-.55749953-.0171046-.84908381-.0866198-.13520812-.0322576-.27003744-.0756114-.3932132-.1380653v1.5302318c0
		1.3201295 1.09561358 2.3983815 2.43697706
		2.3983815h13.39672254c1.3413635 0 2.4369771-1.078252
		2.4369771-2.3983815z"
      />
      <path
        d="m0
		8.79699248c.14260628.06959022.29864665.11050376.44557501.1299645.2753208.03649163.54484912.01335327.79368049.02057717.002302.00003506.00460441.00003506.00690641
		0h5.25640383c.82827939 0 1.4220972.30156492
		1.8240727.75248941.40199777.45094634.60569239 1.06221954.60569239
		1.67601014 0 .6137467-.20369462 1.2250637-.60569239
		1.6759882-.4019755.4509463-.99579331.7524894-1.8240727.7524894h-5.25640383c-.22831264
		0-.50846792-.0188259-.74493458-.075238-.23646666-.0563245-.41416197-.1517676-.48734767-.2599728-.00440013-.0047203-.00900883-.0092487-.01387966-.0135722v-4.65860448zm6.42601595
		1.42288912c-.62979799 0-1.14873693.5024111-1.14873693 1.1218933 0
		.6211677.51893894 1.128745 1.14873693 1.128745.62984256 0
		1.14178597-.5082122 1.14178597-1.128745
		0-.6188692-.51194341-1.1218933-1.14178597-1.1218933z"
      />
    </g>
  </svg>
);

const WalletConnectImage = () => (
  <svg
    height="25"
    viewBox="0 0 40 25"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z"
      fill="#3b99fc"
    ></path>
  </svg>
);
