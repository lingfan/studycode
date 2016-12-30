
Private Sub CommandButton1_Click() '开始作战
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


If Sheet3.Range("n6").Value > 0 And Sheet3.Range("s6").Value > 0 Then  '判断血量是否为0，战斗是否结束
    If Sheet3.Range("M36").Value >= Sheet3.Range("M37").Value Then '比较先攻值 左方先出手
    zuofang1
    youfang2
    ElseIf Sheet3.Range("M36").Value < Sheet3.Range("M37").Value Then '比较先攻值 右方先出手
    youfang1
    zuofang2
    End If
ElseIf Sheet3.Range("n6").Value <= 0 Then
    
    Sheet3.Range("n6").Value = 0
    tishi = "右方获胜"
    MsgBox ("战斗结束，" & tishi)
ElseIf Sheet3.Range("s6").Value <= 0 Then
    Sheet3.Range("s6").Value = 0
    tishi = "左方获胜"
    MsgBox ("战斗结束，" & tishi)
End If
End Sub
Sub zuofang1() '左方作战信息

If Sheet3.Range("P405").Value + Sheet3.Range("P406").Value >= 100 Then '判断是否为绝技
at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"

        Sheet3.Range("P406").Value = 0
        Sheet3.Range("P405").Value = 0
            randJJ = Int(1000 * Rnd)   '随机绝技是否命中 函数 0-1000
            If Sheet3.Range("D419").Value * 1000 >= randJJ Then
            hurt1 = Sheet3.Range("C412").Value '绝技命中
                randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
                    If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '暴击
                    hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                    randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                            If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                            hurt = 0.5 * hurt2
                            Sheet3.Range("N" & bt).Value = "右方[格挡]了左方【绝技】[暴击]，受到" & Int(hurt) + 1 & "点伤害"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            Else
                            hurt = hurt2
                            Sheet3.Range("N" & bt).Value = "左方使用【绝技】[暴击]命中右方，造成" & Int(hurt) + 1 & "点伤害"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            End If
                    ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then '未暴击
                            hurt2 = hurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                            If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                            hurt = 0.5 * hurt2
                            Sheet3.Range("N" & bt).Value = "右方[格挡]了左方【绝技】，受到" & Int(hurt) + 1 & "点伤害"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            Else
                            hurt = hurt2
                            Sheet3.Range("N" & bt).Value = "左方使用【绝技】命中右方，造成" & Int(hurt) + 1 & "点伤害"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            End If
                  End If
            ElseIf Sheet3.Range("D419").Value * 1000 < randJJ Then
            hurt = 0 '绝技未命中
            Sheet3.Range("N" & bt).Value = "右方【闪避】了左方的【绝技】"
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
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"


    randPGMZ = Int(1000 * Rnd) '随机普攻是否命中 函数 0 -1000
        If Sheet3.Range("D419").Value * 1000 >= randPGMZ Then
            hurt1 = Sheet3.Range("C405").Value '普通命中
            randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
            If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '暴击
                hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                        If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "右方[格挡]了左方[暴击]攻击，受到" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "左方[暴击]攻击命中右方，造成" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
            ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then '未暴击
                hurt2 = hurt1
                randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                        If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "右方[格挡]了左方攻击，受到" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "左方攻击命中右方，造成" & Int(hurt) + 1 & "点伤害"
                        SSheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
            End If
        '加提示
        ElseIf Sheet3.Range("D419").Value * 1000 < randPGMZ Then
        hurt = 0 '普通未命中
        Sheet3.Range("N" & bt).Value = "右方【闪避】了左方的攻击"
        End If
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25 + Sheet3.Range("P405").Value
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P405").Value = 0

End If
End Sub
Sub zuofang2() '左方作战信息


If Sheet3.Range("P405").Value + Sheet3.Range("P406").Value >= 100 Then '判断是否为绝技

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"

        
        Sheet3.Range("P406").Value = 0
        Sheet3.Range("P405").Value = 0
            randJJ = Int(1000 * Rnd)   '随机绝技是否命中 函数 0-1000
            If Sheet3.Range("D419").Value * 1000 >= randJJ Then
            hurt1 = Sheet3.Range("C412").Value '绝技命中
                randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
                    If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '暴击
                    hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                    randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                            If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                            hurt = 0.5 * hurt2
                            Sheet3.Range("N" & bt).Value = "右方[格挡]了左方【绝技】[暴击]，受到" & Int(hurt) + 1 & "点伤害"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            Else
                            hurt = hurt2
                            Sheet3.Range("N" & bt).Value = "左方使用【绝技】[暴击]命中右方，造成" & Int(hurt) + 1 & "点伤害"
                            Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                            End If
                    ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then '未暴击
                        hurt2 = hurt1
                        randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                        If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "右方[格挡]了左方【绝技】，受到" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "左方使用【绝技】命中右方，造成" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
                  End If
            ElseIf Sheet3.Range("D419").Value * 1000 < randJJ Then
            hurt = 0 '绝技未命中
            Sheet3.Range("N" & bt).Value = "右方【闪避】了左方的【绝技】"
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
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"


    randPGMZ = Int(1000 * Rnd) '随机普攻是否命中 函数 0 -1000
        If Sheet3.Range("D419").Value * 1000 >= randPGMZ Then
            hurt1 = Sheet3.Range("C405").Value '普通命中
            randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
            If Sheet3.Range("D421").Value * 1000 >= randPGBJ Then '暴击
                hurt2 = (1.5 + Sheet3.Range("D422").Value) * hurt1
                randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                        If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                        hurt = 0.5 * hurt2
                        Sheet3.Range("N" & bt).Value = "右方[格挡]了左方[暴击]攻击，受到" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        Else
                        hurt = hurt2
                        Sheet3.Range("N" & bt).Value = "左方[暴击]攻击命中右方，造成" & Int(hurt) + 1 & "点伤害"
                        Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                        End If
            ElseIf Sheet3.Range("D421").Value * 1000 < randPGBJ Then '未暴击
                hurt2 = hurt1
                randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                    If Sheet3.Range("C5").Value = "战士职业" And Sheet3.Range("F420").Value * 1000 >= randPGGD And (Sheet3.Range("C6").Value = "将星" Or Sheet3.Range("C6").Value = "剑灵" Or Sheet3.Range("C6").Value = "武圣") Then
                    hurt = 0.5 * hurt2
                    Sheet3.Range("N" & bt).Value = "右方[格挡]了左方攻击，受到" & Int(hurt) + 1 & "点伤害"
                    Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                    Else
                    hurt = hurt2
                    Sheet3.Range("N" & bt).Value = "左方攻击命中右方，造成" & Int(hurt) + 1 & "点伤害"
                    Sheet3.Range("S6").Value = Application.WorksheetFunction.Max(Sheet3.Range("S6").Value - Int(hurt) + 1, 0)
                    End If
            End If
        '加提示
        ElseIf Sheet3.Range("D419").Value * 1000 < randPGMZ Then
        hurt = 0 '普通未命中
        Sheet3.Range("N" & bt).Value = "右方【闪避】了左方的攻击"
        End If
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25 + Sheet3.Range("P405").Value
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P407").Value = Sheet3.Range("P406").Value + 25
Sheet3.Range("P406").Value = Sheet3.Range("P407").Value
Sheet3.Range("P405").Value = 0

End If
End Sub
Sub youfang1()

If Sheet3.Range("Q405").Value + Sheet3.Range("Q406").Value >= 100 Then '判断是否为绝技

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"


        Sheet3.Range("Q406").Value = 0
        Sheet3.Range("Q405").Value = 0
            randJJ = Int(1000 * Rnd)   '随机绝技是否命中 函数 0-1000
            If Sheet3.Range("F419").Value * 1000 >= randJJ Then
                yhurt1 = Sheet3.Range("F412").Value '绝技命中
                randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '暴击
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                                    randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("c18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方【绝技】[暴击]，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方使用【绝技】[暴击]命中左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then '未暴击
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("c18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方【绝技】，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方使用【绝技】命中左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        End If
            ElseIf Sheet3.Range("F419").Value * 1000 < randJJ Then
            yhurt = 0 '绝技未命中
            Sheet3.Range("N" & dt).Value = "左方【闪避】了右方的【绝技】攻击"
            
            End If
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
ElseIf A2 + B2 < 100 Then '普通攻击

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"

    randPGMZ = Int(1000 * Rnd) '随机普攻是否命中 函数 0 -1000
            If Sheet3.Range("F419").Value * 1000 >= randPGMZ Then
                yhurt1 = Sheet3.Range("F405").Value '普通命中
                randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '暴击
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("C18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方[暴击]攻击，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方[暴击]攻击命中左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then '未暴击
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("C18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方攻击，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方攻击命中了左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        End If
            
            ElseIf Sheet3.Range("F419").Value * 1000 < randPGMZ Then
            yhurt = 0 '普通未命中
            Sheet3.Range("N" & bt).Value = "左方【闪避】了右方的攻击"
            '加提示
            End If
Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25 + Sheet3.Range("Q405").Value
Sheet3.Range("Q406").Value = Sheet3.Range("P407").Value
Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
Sheet3.Range("Q405").Value = 0
End If

End Sub

Sub youfang2()

If Sheet3.Range("Q405").Value + Sheet3.Range("Q406").Value >= 100 Then '判断是否为绝技

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"


        Sheet3.Range("Q406").Value = 0
        Sheet3.Range("Q405").Value = 0
            randJJ = Int(1000 * Rnd)   '随机绝技是否命中 函数 0-1000
            If Sheet3.Range("F419").Value * 1000 >= randJJ Then
                yhurt1 = Sheet3.Range("F412").Value '绝技命中
                randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '暴击
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                                    randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("c18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方【绝技】[暴击]，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方使用【绝技】[暴击]命中左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then '未暴击
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("c18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方【绝技】，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方使用【绝技】命中左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        End If
            ElseIf Sheet3.Range("F419").Value * 1000 < randJJ Then
            yhurt = 0 '绝技未命中
            Sheet3.Range("N" & dt).Value = "左方【闪避】了右方的【绝技】攻击"
            
            End If
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
        Sheet3.Range("Q407").Value = Sheet3.Range("Q406").Value + 25
        Sheet3.Range("Q406").Value = Sheet3.Range("Q407").Value
ElseIf A2 + B2 < 100 Then '普通攻击

at = Sheet3.Range("T9").Value + 1
bt = (at - 1) Mod 21 + 10
ct = Int((at + 1) / 2)
Sheet3.Range("T9").Value = at
Sheet3.Range("m" & bt).Value = "第" & ct & "回合"

    randPGMZ = Int(1000 * Rnd) '随机普攻是否命中 函数 0 -1000
            If Sheet3.Range("F419").Value * 1000 >= randPGMZ Then
                yhurt1 = Sheet3.Range("F405").Value '普通命中
                randPGBJ = Int(1000 * Rnd) '随机普攻是否暴击 函数 0 -1000
                        If Sheet3.Range("F421").Value * 1000 >= randPGBJ Then '暴击
                        yhurt2 = (1.5 + Sheet3.Range("F422").Value) * yhurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("C18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方[暴击]攻击，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方[暴击]攻击命中左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        ElseIf Sheet3.Range("F421").Value * 1000 < randPGBJ Then '未暴击
                            yhurt2 = yhurt1
                            randPGGD = Int(1000 * Rnd) '随机普攻是否格挡 函数 0 -1000
                                    If Sheet3.Range("C18").Value = "战士职业" And Sheet3.Range("D420").Value * 1000 >= randPGGD And (Sheet3.Range("C19").Value = "将星" Or Sheet3.Range("C19").Value = "剑灵" Or Sheet3.Range("C19").Value = "武圣") Then
                                    yhurt = 0.5 * yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "左方[格挡]了右方攻击，受到" & Int(yhurt) + 1 & "点伤害"
                                    Else
                                    yhurt = yhurt2
                                    Sheet3.Range("n6").Value = Application.WorksheetFunction.Max(Sheet3.Range("n6").Value - Int(yhurt) + 1, 0)
                                    Sheet3.Range("N" & bt).Value = "右方攻击命中了左方，造成" & Int(yhurt) + 1 & "点伤害"
                                    End If
                        End If
            
            ElseIf Sheet3.Range("F419").Value * 1000 < randPGMZ Then
            yhurt = 0 '普通未命中
            Sheet3.Range("N" & bt).Value = "左方【闪避】了右方的攻击"
            '加提示
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



