import PopupExample from "./SecondExample";
import SecondExample from "./SecondExample";
import { Popup, PopupMe } from "../providerLib";

const ProviderPage = () => {
  // return (
  //   <div className="col-center gap-2x p-x ">
  //     <div onClick={popupFunction} className="bg-prim round-l p-3x">
  //       show infos
  //     </div>
  //   </div>
  // );
  return <PopupExample />;
  return <SecondExample />;
  // return <Tester />;
};

const popupFunction = ({ target }: any) => {
  const id = "infos";
  PopupMe(InfosHandler, {
    id,
    target,
    componentProps: {
      title: "infos",
      remove: () => {
        Popup.remove(id);
      },
    },
    animation: "height",
  });
};

const InfosHandler = ({ title, remove }: any) => {
  return (
    <div className="col gap-l p-l ">
      <div
        className="bg-red"
        onClick={() => {
          remove();
        }}>
        remove
      </div>
      <div className="">{title}</div>
    </div>
  );
};

export default ProviderPage;
