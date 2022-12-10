import { OrdersBoard } from "../OrdersBoard";
import * as S from "./styles";

export function Orders() {
  return (
    <S.Container>
      <OrdersBoard icon="⏰" title="Fila de espera" orders={[]} />
      <OrdersBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto !" orders={[]} />
    </S.Container>
  );
}
