
Private Sub CommandButton1_Click() '��ʼ��ս
Dim A1 As Integer
Dim B1 As Integer
Dim C1 As Integer
Dim A2 As Integer
Dim B2 As Integer
Dim C2 As Integer

Dim hurt As String
Dim hurt1 As String
Dim hurt2 As String
Dim hurt3 As String
Dim yhurt As String
Dim yhurt1 As String
Dim yhurt2 As String
Dim yhurt3 As String

Dim at As String
Dim bt As String
Dim ct As String
Dim dt As String
Dim et As String
Dim ft As String

A1 = Sheet3.Range("P405").Value
B1 = Sheet3.Range("P406").Value
C1 = Sheet3.Range("P407").Value
A2 = Sheet3.Range("Q405").Value
B2 = Sheet3.Range("Q406").Value
C2 = Sheet3.Range("Q407").Value


If Sheet3.Range("n6").Value > 0 And Sheet3.Range("s6").Value > 0 Then  '�ж�Ѫ���Ƿ�Ϊ0��ս���Ƿ����
    If Sheet3.Range("M36").Value >= Sheet3.Range("M37").Value Then '�Ƚ��ȹ�ֵ ���ȳ���
    zuofang1
    youfang2
    ElseIf Sheet3.Range("M36").Value < Sheet3.Range("M37").Value Then '�Ƚ��ȹ�ֵ �ҷ��ȳ���
    youfang1
    zuofang2
    End If
ElseIf Sheet3.Range("n6").Value <= 0 Then
    
    Sheet3.Range("n6").Value = 0
    tishi = "�ҷ���ʤ"
    MsgBox ("ս��������" & tishi)
ElseIf Sheet3.Range("s6").Value <= 0 Then
    Sheet3.Range("s6").Value = 0
    tishi = "�󷽻�ʤ"
    MsgBox ("ս��������" & tishi)
End If
End Sub
Sub zuofang1() '����ս��Ϣ

If Sheet3.Range("P405").Value + Sheet3.Range("P406").Value >= 100 Then '�ж��Ƿ�Ϊ����
at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"

        Sheet3.Range("P406").Value = 0
        Sheet3.Range("P405").Value = 0
            randJJ = Int(1000 * Rnd)   '��������Ƿ����� ���� 0-1000
            If Sheet3.Range("D419").Value * 1000 >= randJJ Then
            hurt1 = Sheet3.Range("C412").Value '��������
                randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
                    If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '����
                    hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                    randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                            If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                            hurt = 0.5 * hurt2
                            Sheet3.Range("N" & bt).Value = "�ҷ�[��]���󷽡�������[����]���ܵ�" & Int(hurt) + 1 & "���˺�"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            Else
                            hurt = hurt2
                            Sheet3.Range("N" & bt).Value = "��ʹ�á�������[����]�����ҷ������" & Int(hurt) + 1 & "���˺�"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            End If
                    ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then 'δ����
                            hurt2 = hurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                            If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                            hurt = 0.5 * hurt2
                            Sheet3.Range("N" & bt).Value = "�ҷ�[��]���󷽡����������ܵ�" & Int(hurt) + 1 & "���˺�"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            Else
                            hurt = hurt2
                            Sheet3.Range("N" & bt).Value = "��ʹ�á������������ҷ������" & Int(hurt) + 1 & "���˺�"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            End If
                  End If
            ElseIf Sheet3.Range("D419").Value * 1000 < randJJ Then
            hurt = 0 '����δ����
            Sheet3.Range("N" & bt).Value = "�ҷ������ܡ����󷽵ġ�������"
            End If
        Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
        Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
        Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
        Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
            
ElseIf Sheet3.Range("P405").Value + Sheet3.Range("P406").Value < 100 Then

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"


    randPGMZ = Int(1000 * Rnd) '����չ��Ƿ����� ���� 0 -1000
        If Sheet3.Range("D419").Value * 1000 >= randPGMZ Then
            hurt1 = Sheet3.Range("C405").Value '��ͨ����
            randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
            If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '����
                hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                        If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "�ҷ�[��]����[����]�������ܵ�" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "��[����]���������ҷ������" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
            ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then 'δ����
                hurt2 = hurt1
                randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                        If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "�ҷ�[��]���󷽹������ܵ�" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "�󷽹��������ҷ������" & Int(hurt) + 1 & "���˺�"
                        SSheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
            End If
        '����ʾ
        ElseIf Sheet3.Range("D419").Value * 1000 < randPGMZ Then
        hurt = 0 '��ͨδ����
        Sheet3.Range("N" & bt).Value = "�ҷ������ܡ����󷽵Ĺ���"
        End If
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25 + Sheet3.Range("P405").Value
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P405").Value = 0

End If
End Sub
Sub zuofang2() '����ս��Ϣ


If Sheet3.Range("P405").Value + Sheet3.Range("P406").Value >= 100 Then '�ж��Ƿ�Ϊ����

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"

        
        Sheet3.Range("P406").Value = 0
        Sheet3.Range("P405").Value = 0
            randJJ = Int(1000 * Rnd)   '��������Ƿ����� ���� 0-1000
            If Sheet3.Range("D419").Value * 1000 >= randJJ Then
            hurt1 = Sheet3.Range("C412").Value '��������
                randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
                    If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '����
                    hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                    randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                            If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                            hurt = 0.5 * hurt2
                            Sheet3.Range("N" & bt).Value = "�ҷ�[��]���󷽡�������[����]���ܵ�" & Int(hurt) + 1 & "���˺�"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            Else
                            hurt = hurt2
                            Sheet3.Range("N" & bt).Value = "��ʹ�á�������[����]�����ҷ������" & Int(hurt) + 1 & "���˺�"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            End If
                    ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then 'δ����
                        hurt2 = hurt1
                        randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                        If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "�ҷ�[��]���󷽡����������ܵ�" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "��ʹ�á������������ҷ������" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
                  End If
            ElseIf Sheet3.Range("D419").Value * 1000 < randJJ Then
            hurt = 0 '����δ����
            Sheet3.Range("N" & bt).Value = "�ҷ������ܡ����󷽵ġ�������"
            End If
        Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
        Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
        Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
        Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
            
ElseIf Sheet3.Range("P405").Value + Sheet3.Range("P406").Value < 100 Then

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"


    randPGMZ = Int(1000 * Rnd) '����չ��Ƿ����� ���� 0 -1000
        If Sheet3.Range("D419").Value * 1000 >= randPGMZ Then
            hurt1 = Sheet3.Range("C405").Value '��ͨ����
            randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
            If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '����
                hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                        If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "�ҷ�[��]����[����]�������ܵ�" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "��[����]���������ҷ������" & Int(hurt) + 1 & "���˺�"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
            ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then 'δ����
                hurt2 = hurt1
                randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                    If Sheet3.Range("C5").Value = "սʿְҵ" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "����" Or Sheet3.Range("C6").Value = "��ʥ") Then
                    hurt = 0.5 * hurt2
                    Sheet3.Range("N" & bt).Value = "�ҷ�[��]���󷽹������ܵ�" & Int(hurt) + 1 & "���˺�"
                    Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                    Else
                    hurt = hurt2
                    Sheet3.Range("N" & bt).Value = "�󷽹��������ҷ������" & Int(hurt) + 1 & "���˺�"
                    Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                    End If
            End If
        '����ʾ
        ElseIf Sheet3.Range("D419").Value * 1000 < randPGMZ Then
        hurt = 0 '��ͨδ����
        Sheet3.Range("N" & bt).Value = "�ҷ������ܡ����󷽵Ĺ���"
        End If
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25 + Sheet3.Range("P405").Value
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P405").Value = 0

End If
End Sub
Sub youfang1()

If Sheet3.Range("Q405").Value + Sheet3.Range("Q406").Value >= 100 Then '�ж��Ƿ�Ϊ����

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"


        Sheet3.Range("Q406").Value = 0
        Sheet3.Range("Q405").Value = 0
            randJJ = Int(1000 * Rnd)   '��������Ƿ����� ���� 0-1000
            If Sheet3.Range("F419").Value * 1000 >= randJJ Then
                yhurt1 = Sheet3.Range("F412").Value '��������
                randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '����
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                                    randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("c18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ���������[����]���ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ�ʹ�á�������[����]�����󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then 'δ����
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("c18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ������������ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ�ʹ�á������������󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        End If
            ElseIf Sheet3.Range("F419").Value * 1000 < randJJ Then
            yhurt = 0 '����δ����
            Sheet3.Range("N" & dt).Value = "�󷽡����ܡ����ҷ��ġ�����������"
            
            End If
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
ElseIf A2 + B2 < 100 Then '��ͨ����

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"

    randPGMZ = Int(1000 * Rnd) '����չ��Ƿ����� ���� 0 -1000
            If Sheet3.Range("F419").Value * 1000 >= randPGMZ Then
                yhurt1 = Sheet3.Range("F405").Value '��ͨ����
                randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '����
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("C18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ�[����]�������ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ�[����]���������󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then 'δ����
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("C18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ��������ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ������������󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        End If
            
            ElseIf Sheet3.Range("F419").Value * 1000 < randPGMZ Then
            yhurt = 0 '��ͨδ����
            Sheet3.Range("N" & bt).Value = "�󷽡����ܡ����ҷ��Ĺ���"
            '����ʾ
            End If
Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25 + Sheet3.Range("Q405").Value
Sheet3.Range("Q406").Value = Sheet3.Range("P407").Value
Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
Sheet3.Range("Q405").Value = 0
End If

End Sub

Sub youfang2()

If Sheet3.Range("Q405").Value + Sheet3.Range("Q406").Value >= 100 Then '�ж��Ƿ�Ϊ����

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"


        Sheet3.Range("Q406").Value = 0
        Sheet3.Range("Q405").Value = 0
            randJJ = Int(1000 * Rnd)   '��������Ƿ����� ���� 0-1000
            If Sheet3.Range("F419").Value * 1000 >= randJJ Then
                yhurt1 = Sheet3.Range("F412").Value '��������
                randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '����
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                                    randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("c18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ���������[����]���ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ�ʹ�á�������[����]�����󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then 'δ����
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("c18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ������������ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ�ʹ�á������������󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        End If
            ElseIf Sheet3.Range("F419").Value * 1000 < randJJ Then
            yhurt = 0 '����δ����
            Sheet3.Range("N" & dt).Value = "�󷽡����ܡ����ҷ��ġ�����������"
            
            End If
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
ElseIf A2 + B2 < 100 Then '��ͨ����

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "��" & ct & "�غ�"

    randPGMZ = Int(1000 * Rnd) '����չ��Ƿ����� ���� 0 -1000
            If Sheet3.Range("F419").Value * 1000 >= randPGMZ Then
                yhurt1 = Sheet3.Range("F405").Value '��ͨ����
                randPGBJ = Int(1000 * Rnd) '����չ��Ƿ񱩻� ���� 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '����
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("C18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ�[����]�������ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ�[����]���������󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then 'δ����
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '����չ��Ƿ�� ���� 0 -1000
                                    If Sheet3.Range("C18").Value = "սʿְҵ" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "����" Or Sheet3.Range("C19").Value = "��ʥ") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "��[��]���ҷ��������ܵ�" & Int(yhurt) + 1 & "���˺�"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "�ҷ������������󷽣����" & Int(yhurt) + 1 & "���˺�"
                                    End If
                        End If
            
            ElseIf Sheet3.Range("F419").Value * 1000 < randPGMZ Then
            yhurt = 0 '��ͨδ����
            Sheet3.Range("N" & bt).Value = "�󷽡����ܡ����ҷ��Ĺ���"
            '����ʾ
            End If
Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25 + Sheet3.Range("Q405").Value
Sheet3.Range("Q406").Value = Sheet3.Range("P407").Value
Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
Sheet3.Range("Q405").Value = 0
End If

End Sub


Private Sub CommandButton2_Click()
Sheet3.Range("m10", "S30").Value = ""
Sheet3.Range("t9", "t30").Value = ""
Sheet3.Range("P405").Value = Sheet3.Range("l14").Value
Sheet3.Range("Q405").Value = Sheet3.Range("l27").Value
Sheet3.Range("N6").Value = Sheet3.Range("L13").Value
Sheet3.Range("S6").Value = Sheet3.Range("L26").Value
Sheet3.Range("p406", "Q407").Value = 0
End Sub



