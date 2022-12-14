import * as S from "./styles";
import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

type TableModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
};

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <S.Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <S.ModalBody>
          <S.Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#665" />
            </TouchableOpacity>
          </S.Header>

          <S.Form>
            <S.Input
              placeholder="Número da mesa"
              placeholderTextColor="#665"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button
              label="Salvar"
              onPress={handleSave}
              disabled={table.length === 0}
            />
          </S.Form>
        </S.ModalBody>
      </S.Overlay>
    </Modal>
  );
}
