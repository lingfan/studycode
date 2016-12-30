Option Explicit
'■■■定义战斗单位的数据结构■■■
Private Type BattleUnit
    Name As String
    HP As Long
    ATK As Integer
    DEF As Integer
    SPD As Integer
    CRL As Single
    DGE As Single
    CurrentSpeed As Integer
    CurrentHp As Long
    IDNum As Integer
    DMGTakesCount As Long
    DMGGetCount As Long
    DeadCount As Integer
    ActionCount As Integer
End Type
'■■■■■■■■■■■■■■■■■

'□□□定义常用变量□□□
'Private Declare PtrSafe Sub Wait Lib "kernel32" Alias "wait" (ByVal dwMilliseconds As Long) '读取windows库，使用wait方法

Private Unit(1 To 4) As BattleUnit   '定义4个战斗单位                          '★★★添加战斗单位数量★★★
Dim GameSpeed As Double              '战斗速度变量
Dim Damage As Long                   '伤害，全局变量
Dim BattleReportLine As Integer      '战报的行数，用来控制战报信息的
Dim AttackResult As String           '攻击种类的判断变量
Dim IsBattleFinished As Boolean      '检测战斗是否结束变量
Dim frame As Single                  '动画帧数
Dim ISBattleFast As Boolean          '快速战斗开关
Dim SPDSpliter As Integer            '速度积攒调节
Dim IsLeftWin As Boolean
Dim Formula As String
Dim FormulaDmg As Double
Dim a, b, c, d As Double
'□□□□□□□□□□□□


'■■■开始战斗按钮■■■
Private Sub CommandButton1_Click()
    Dim i As Integer
    ISBattleFast = False
    SPDSpliter = 10
    If ComboBox1 = "" Or ComboBox2 = "" Or ComboBox3 = "" Or ComboBox4 = "" Then      '检测是否所有单位是否为空              '★★★添加战斗单位数量★★★
        MsgBox ("请选择角色")
    Else
    For i = 1 To 4
        With Unit(i)
            .DMGGetCount = 0
            .DMGTakesCount = 0
            .DeadCount = 0
            .ActionCount = 0
        End With
    Next i
        GameSpeed = 0.1
        IsBattleFinished = False
        Call Reset
        Call InitData
        Call MainLoop
        MsgBox ("Game Over")
    End If
    
    
End Sub
'■■■■■■■■■■■■

Private Sub CommandButton2_Click()
    Dim i As Integer
    ISBattleFast = True
    SPDSpliter = 1
    If ComboBox1 = "" Or ComboBox2 = "" Or ComboBox3 = "" Or ComboBox4 = "" Then      '检测是否所有单位是否为空              '★★★添加战斗单位数量★★★
        MsgBox ("请选择角色")
    Else
        For i = 1 To 4
            With Unit(i)
                .DMGGetCount = 0
                .DMGTakesCount = 0
                .DeadCount = 0
                .ActionCount = 0
            End With
        Next i
        Range("StatisticsArea").ClearContents
        GameSpeed = 0.00000001
        For i = 1 To Range("BattleTimes")
            Range("StatisticsArea").Cells(1, 1) = i
            IsBattleFinished = False
            Call Reset
            Call InitData
            Call MainLoop
            
        Next i
    End If
End Sub



'□□□对combobox载入数据列表□□□
Private Sub worksheet_activate()
Dim i As Integer
    ComboBox1.Clear
    ComboBox2.Clear
    ComboBox3.Clear
    ComboBox4.Clear                     '★★★添加战斗单位数量★★★
    For i = 2 To 100                                                  '读取所有单位列表
        If Worksheets("Data").Range("A" & i) <> "" Then                '★★★添加战斗单位数量★★★
            ComboBox1.AddItem (Worksheets("Data").Range("B" & i))
            ComboBox2.AddItem (Worksheets("Data").Range("B" & i))
            ComboBox3.AddItem (Worksheets("Data").Range("B" & i))
            ComboBox4.AddItem (Worksheets("Data").Range("B" & i))
        Else
            Exit For
        End If
    Next
End Sub
'□□□□□□□□□□□□□□□□□

'■■■选角色后加载数据■■■                  '★★★添加战斗单位数量★★★
Private Sub ComboBox1_Change()
    Dim i As Integer
    If ComboBox1 <> "" Then
        For i = 1 To 6                                              '加载6项属性
            Range("UnitStatusArea1").Cells(i, 1) = WorksheetFunction.VLookup(ComboBox1, Worksheets("Data").Range("UnitStatus"), 3 + i, False)
        Next
        Range("UnitName1") = ComboBox1
        Unit(1).Name = ComboBox1
        Range("Statistics").Cells(2, 1) = ComboBox1
        Shapes("HPString1").TextEffect.Text = CStr(Range("UnitStatusArea1").Cells(1, 1) & "/" & Range("UnitStatusArea1").Cells(1, 1))          '血条生命值显示
        
    Else
        Range("UnitStatusArea1").ClearContents
    End If
End Sub
Private Sub ComboBox2_Change()
    Dim i As Integer
    If ComboBox2 <> "" Then
        For i = 1 To 6
            Range("UnitStatusArea2").Cells(i, 1) = WorksheetFunction.VLookup(ComboBox2, Worksheets("Data").Range("UnitStatus"), 3 + i, False)
        Next
        Range("UnitName2") = ComboBox2
        Unit(2).Name = ComboBox2
        Range("Statistics").Cells(3, 1) = ComboBox2
        Shapes("HPString2").TextEffect.Text = CStr(Range("UnitStatusArea2").Cells(1, 1) & "/" & Range("UnitStatusArea2").Cells(1, 1))
    Else
        Range("UnitStatusArea2").ClearContents
    End If
End Sub
Private Sub combobox3_Change()
    Dim i As Integer
    If ComboBox3 <> "" Then
        For i = 1 To 6
            Range("UnitStatusArea3").Cells(i, 1) = WorksheetFunction.VLookup(ComboBox3, Worksheets("Data").Range("UnitStatus"), 3 + i, False)
        Next
        Range("UnitName3") = ComboBox3
        Unit(3).Name = ComboBox3
        Range("Statistics").Cells(4, 1) = ComboBox3
        Shapes("HPString3").TextEffect.Text = CStr(Range("UnitStatusArea3").Cells(1, 1) & "/" & Range("UnitStatusArea3").Cells(1, 1))
    Else
        Range("UnitStatusArea3").ClearContents
    End If
End Sub
Private Sub combobox4_Change()
    Dim i As Integer
    If ComboBox4 <> "" Then
        For i = 1 To 6
            Range("UnitStatusArea4").Cells(i, 1) = WorksheetFunction.VLookup(ComboBox4, Worksheets("Data").Range("UnitStatus"), 3 + i, False)
        Next
        Range("UnitName4") = ComboBox4
        Unit(4).Name = ComboBox4
        Range("Statistics").Cells(5, 1) = ComboBox4
        Shapes("HPString4").TextEffect.Text = CStr(Range("UnitStatusArea4").Cells(1, 1) & "/" & Range("UnitStatusArea4").Cells(1, 1))
    Else
        Range("UnitStatusArea4").ClearContents
    End If
End Sub
'■■■■■■■■■■■■■■

'□□□初始化数据□□□
Private Sub InitData()
    Dim i, j, k As Integer
    For i = 1 To 4                                    '储存角色属性值到变量            '★★★添加战斗单位数量★★★
        With Unit(i)
            .HP = Range("UnitStatusArea" & i).Cells(1, 1)
            .ATK = Range("UnitStatusArea" & i).Cells(2, 1)
            .DEF = Range("UnitStatusArea" & i).Cells(3, 1)
            .SPD = Range("UnitStatusArea" & i).Cells(4, 1)
            .CRL = Range("UnitStatusArea" & i).Cells(5, 1)
            .DGE = Range("UnitStatusArea" & i).Cells(6, 1)
            .CurrentHp = .HP
            .Name = Range("UnitName" & i)
            .IDNum = i
        End With
    Next i
    
End Sub
'□□□□□□□□□□□

'■■■主函数入口■■■
Private Sub MainLoop()


    Dim i, loopNdx As Integer
    Dim t As Double
    For i = 1 To 2
        i = 1
        loopNdx = loopNdx + 1
        If IsBattleFinished Then Exit For
        Call SpeedCalculation
        If Not ISBattleFast Then
            Call SPDBarReDraw
            t = Timer
            Do While Timer - t < GameSpeed       '速度调节
                DoEvents
            Loop
        Else
            DoEvents
        End If
        Call CheckBattleFinished
    Next i
    
End Sub
'■■■■■■■■■■■

'□□□初始化数据□□□
Private Sub SpeedCalculation()
    Dim i As Integer
    For i = 1 To 4                      '★★★添加战斗单位数量★★★
        With Unit(i)
            If .CurrentHp > 0 Then
                If .CurrentSpeed < 100 Then
                    .CurrentSpeed = .CurrentSpeed + .SPD / SPDSpliter     '将速度切细，不然一大块一大块的加
                Else
                    .CurrentSpeed = .CurrentSpeed - 100
                    'Range("UnitStatusArea" & i).Interior.ColorIndex = 1        '颜色标记攻击者
                    'wait (200)
                    .ActionCount = .ActionCount + 1
                    Call TargetSelect(i)
                End If
            End If
        End With
    Next i
End Sub
'□□□□□□□□□□□

'■■■检查是否达成战斗结束的标准■■■
Private Sub CheckBattleFinished()           '★★★添加战斗单位数量★★★
    
    IsBattleFinished = False
    If Unit(1).CurrentHp = 0 And Unit(2).CurrentHp = 0 Then
        IsBattleFinished = True
        Range("StatisticsArea").Cells(1, 3) = Range("StatisticsArea").Cells(1, 3) + 1
    End If
    If Unit(3).CurrentHp = 0 And Unit(4).CurrentHp = 0 Then
        IsBattleFinished = True
        Range("StatisticsArea").Cells(1, 2) = Range("StatisticsArea").Cells(1, 2) + 1
    End If
End Sub
'■■■■■■■■■■■■■■■■■■■

'□□□初始化数据□□□
Private Sub SPDBarReDraw()
    Dim i As Integer
    For i = 1 To 4             '★★★添加战斗单位数量★★★
        With Unit(i)
            If .CurrentSpeed > 100 Then
                Shapes("SPDBar" & i).Width = 85
            Else
                Shapes("SPDBar" & i).Width = 85 * (.CurrentSpeed / 100)
            End If
        End With
    Next i
End Sub
'□□□□□□□□□□□

'■■■行动方的目标选择■■■
Private Sub TargetSelect(ByVal UnitNum As Integer)
    Dim TargetNum As Integer
    Randomize
    Select Case UnitNum <= 2          '★★★添加战斗单位数量★★★
        Case False
            TargetNum = Int(1 + 2 * Rnd)            '★★★添加战斗单位数量★★★
            If Unit(TargetNum).CurrentHp = 0 Then TargetNum = 1 + 2 - TargetNum  '如果一方已死亡，则选择另一方      '★★★添加战斗单位数量★★★
        Case True
            TargetNum = Int(3 + 2 * Rnd)      '★★★添加战斗单位数量★★★
            If Unit(TargetNum).CurrentHp = 0 Then TargetNum = 3 + 4 - TargetNum  '如果一方已死亡，则选择另一方       '★★★添加战斗单位数量★★★
    End Select
    'Range("UnitStatusArea" & TargetNum).Interior.ColorIndex = 10                '被攻击方的颜色标记
    'wait (200)
    If Not ISBattleFast Then Call UnitMoveForward(UnitNum)
    Call Attack(Unit(UnitNum), Unit(TargetNum))
    'Range("UnitStatusArea" & UnitNum).Interior.ColorIndex = -4142        '还原被标记的颜色
    'Range("UnitStatusArea" & TargetNum).Interior.ColorIndex = -4142
    
End Sub
'■■■■■■■■■■■■■■■■■■■

'□□□判断并执行攻击□□□
Private Sub Attack(UnitA As BattleUnit, UnitB As BattleUnit)
    Dim pickNum As Double
    Randomize
    pickNum = Rnd
    
    Select Case Formula
        Case "Formula1"
            FormulaDmg = a * UnitA.ATK - b * UnitB.DEF
        Case "Formula2"
            FormulaDmg = a * UnitA.ATK * b * (UnitB.DEF + c) ^ d
        Case "Formula3"
            FormulaDmg = a * (UnitA.ATK) ^ b / (c * UnitA.ATK + d * UnitB.DEF)
    End Select
    
    
    Select Case pickNum
        Case 0 To UnitB.DGE   '闪避
            Damage = 0
            AttackResult = "Dodge"
        Case UnitB.DGE To UnitB.DGE + UnitA.CRL  '暴击
            Damage = Int(FormulaDmg * (0.95 + 0.1 * Rnd) * 1.5)
            If Damage < 1 Then Damage = 1
            UnitB.CurrentHp = UnitB.CurrentHp - Damage
            If UnitB.CurrentHp <= 0 Then
                UnitB.CurrentHp = 0
                Range("UnitName" & UnitB.IDNum) = "Dead"
                Range("UnitName" & UnitB.IDNum).Interior.Color = 255
                Call UnitDead(UnitB.IDNum)
                'Call CheckBattleFinished
                UnitB.DeadCount = UnitB.DeadCount + 1
            End If
            AttackResult = "Critical"
        Case Else    '普通攻击
            Damage = Int(FormulaDmg * (0.95 + 0.1 * Rnd))
            If Damage < 1 Then Damage = 1
            UnitB.CurrentHp = UnitB.CurrentHp - Damage
            If UnitB.CurrentHp <= 0 Then
                UnitB.CurrentHp = 0
                Range("UnitName" & UnitB.IDNum) = "Dead"
                Range("UnitName" & UnitB.IDNum).Interior.Color = 255
                Call UnitDead(UnitB.IDNum)
                'Call CheckBattleFinished
                UnitB.DeadCount = UnitB.DeadCount + 1
            End If
            AttackResult = "Normal"
    End Select
    UnitA.DMGTakesCount = UnitA.DMGTakesCount + Damage
    UnitB.DMGGetCount = UnitB.DMGGetCount + Damage
    If Not ISBattleFast Then Call HitEffect(UnitB.IDNum)
    Call BattleInfoRefresh(UnitA, UnitB)
    If Not ISBattleFast Then Call UnitMoveBack(UnitA.IDNum)
    
End Sub
'□□□□□□□□□□□□□

Private Sub BattleInfoRefresh(UnitA As BattleUnit, UnitB As BattleUnit)
    Dim i As Integer
    For i = 1 To 4               '刷新血条以及HP数据      '★★★添加战斗单位数量★★★
        Range("UnitStatusArea" & i).Cells(1, 1) = Unit(i).CurrentHp
        Shapes("HPBar" & i).Width = Unit(i).CurrentHp / Unit(i).HP * 85
        Shapes("HPString" & i).TextEffect.Text = Unit(i).CurrentHp & "/" & Unit(i).HP
        
        Range("Statistics").Cells(i + 1, 2) = Unit(i).DMGTakesCount
        Range("Statistics").Cells(i + 1, 3) = Unit(i).ActionCount
        Range("Statistics").Cells(i + 1, 4) = Unit(i).DMGGetCount
        Range("Statistics").Cells(i + 1, 5) = Unit(i).DeadCount
    Next i
    Range("BattleReportArea").Cells(6, 1).Font.Bold = False
    For i = 2 To 6
    Range("BattleReportArea").Cells(i, 1).Copy Range("BattleReportArea").Cells(i - 1, 1)
    'Range("BattleReportArea").Cells(i - 1, 1) = Range("BattleReportArea").Cells(i, 1)
    Next i
    Range("BattleReportArea").Cells(6, 1).Font.Bold = True
    BattleReportLine = 6
    Select Case AttackResult          '显示战报信息
        Case "Normal"
            Range("BattleReportArea").Cells(BattleReportLine, 1).Font.Color = 0
            Range("BattleReportArea").Cells(BattleReportLine, 1) = "【" & UnitA.Name & "'s Attack!" & "】" & UnitA.Name & " takes " & Damage & " damage(s) to " & UnitB.Name
        Case "Critical"
            Range("BattleReportArea").Cells(BattleReportLine, 1).Font.Color = 255
            Range("BattleReportArea").Cells(BattleReportLine, 1) = "【" & UnitA.Name & "'s Attack!" & "】" & "【Critical Attack !】" & UnitA.Name & " takes " & Damage & " damage(s) to " & UnitB.Name
        Case "Dodge"
            Range("BattleReportArea").Cells(BattleReportLine, 1).Font.Color = 8421504
            Range("BattleReportArea").Cells(BattleReportLine, 1) = "【" & UnitA.Name & "'s Attack!" & "】" & "【Miss】" & UnitA.Name & " takes " & Damage & " damage(s) to " & UnitB.Name
    End Select
End Sub

Private Sub Reset()
    Dim i As Integer
    Range("UnitStatusArea1").Cells(1, 1) = WorksheetFunction.VLookup(ComboBox1, Worksheets("Data").Range("UnitStatus"), 4, False)
    Range("UnitStatusArea2").Cells(1, 1) = WorksheetFunction.VLookup(ComboBox2, Worksheets("Data").Range("UnitStatus"), 4, False)
    Range("UnitStatusArea3").Cells(1, 1) = WorksheetFunction.VLookup(ComboBox3, Worksheets("Data").Range("UnitStatus"), 4, False)
    Range("UnitStatusArea4").Cells(1, 1) = WorksheetFunction.VLookup(ComboBox4, Worksheets("Data").Range("UnitStatus"), 4, False)          '★★★添加战斗单位数量★★★
    Range("UnitName1") = ComboBox1
    Range("UnitName2") = ComboBox2
    Range("UnitName3") = ComboBox3
    Range("UnitName4") = ComboBox4                                  '★★★添加战斗单位数量★★★
    For i = 1 To 2
        Worksheets("Data").Shapes("Unit" & i & "Move1").PickUp
        Shapes("UnitModel" & i).Apply
        Shapes("UnitModel" & i).Left = 60
        Worksheets("Data").Shapes("Unit" & i + 2 & "Move1").PickUp
        Shapes("UnitModel" & i + 2).Apply
        Shapes("UnitModel" & i + 2).Left = 830
    Next i
    For i = 1 To 4
        Range("UnitName" & i).Interior.Color = 12611584
        Shapes("HPBar" & i).Width = 85
        'Range("UnitName" & i) = Unit(i).Name
    Next i
    BattleReportLine = 0
    Range("F22:G1000").ClearContents
End Sub

Private Sub UnitMoveForward(UnitNum As Integer)
    Dim i As Integer
    frame = 0
    If UnitNum <= 2 Then              '★★★添加战斗单位数量★★★
        For i = 60 To 140
            Shapes("UnitModel" & UnitNum).Left = i
            Worksheets("Data").Shapes("Unit" & UnitNum & "Move" & MoveNextFrame).PickUp
            Shapes("UnitModel" & UnitNum).Apply
            DoEvents
            'wait (1)
        Next i
    Else
        For i = 830 To 750 Step -1
            Shapes("UnitModel" & UnitNum).Left = i
            Worksheets("Data").Shapes("Unit" & UnitNum & "Move" & MoveNextFrame).PickUp
            Shapes("UnitModel" & UnitNum).Apply
            DoEvents
            'wait (1)
        Next i
    End If
    For i = 1 To 4
        Worksheets("Data").Shapes("Unit" & UnitNum & "ATK" & i).PickUp
        Shapes("UnitModel" & UnitNum).Apply
        DoEvents
        Wait (10)
    Next i
       
     For i = 4 To 1 Step -1
        Worksheets("Data").Shapes("Unit" & UnitNum & "ATK" & i).PickUp
        Shapes("UnitModel" & UnitNum).Apply
        DoEvents
        Wait (10)
    Next i
End Sub

Private Sub UnitMoveBack(UnitNum As Integer)
    Dim i As Integer
    If UnitNum <= 2 Then                                  '★★★添加战斗单位数量★★★
        For i = 140 To 60 Step -1
            Shapes("UnitModel" & UnitNum).Left = i
            Worksheets("Data").Shapes("Unit" & UnitNum & "Move" & MoveNextFrame).PickUp
            Shapes("UnitModel" & UnitNum).Apply
            DoEvents
            'wait (1)
        Next
    Else
        For i = 750 To 830
            Shapes("UnitModel" & UnitNum).Left = i
            Worksheets("Data").Shapes("Unit" & UnitNum & "Move" & MoveNextFrame).PickUp
            Shapes("UnitModel" & UnitNum).Apply
            DoEvents
            'wait (1)
        Next
    End If
End Sub

Private Sub HitEffect(UnitNum As Integer)
    Dim OriPos
    OriPos = Shapes("UnitModel" & UnitNum).Left
    If UnitNum >= 3 Then                   '★★★添加战斗单位数量★★★
        Select Case AttackResult
            Case "Normal"
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 5
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = OriPos
            Case "Critical"
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 80
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = OriPos
            Case "Dodge"
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 60
                DoEvents
                Wait (400)
                Shapes("UnitModel" & UnitNum).Left = OriPos
        End Select
    Else
        Select Case AttackResult
            Case "Normal"
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 5
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = OriPos
            Case "Critical"
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 80
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left + 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 10
                DoEvents
                Wait (50)
                Shapes("UnitModel" & UnitNum).Left = OriPos
            Case "Dodge"
                Shapes("UnitModel" & UnitNum).Left = Shapes("UnitModel" & UnitNum).Left - 60
                Wait (400)
                Shapes("UnitModel" & UnitNum).Left = OriPos
        End Select
    End If
End Sub

Private Function MoveNextFrame() As Integer
    frame = frame + 0.1
    If frame >= 5 Or frame < 1 Then frame = 1
    MoveNextFrame = Int(frame)
End Function

Private Function ATKNextFrame() As Integer
    frame = frame + 1
    If frame >= 5 Or frame < 1 Then frame = 1
    ATKNextFrame = frame
End Function

Private Sub UnitDead(UnitNum As Integer)
    Worksheets("Data").Shapes("Unit" & UnitNum & "Dead").PickUp
    Shapes("UnitModel" & UnitNum).Apply
End Sub

Private Sub Wait(ByVal Time As Double)
    Dim t As Double
    t = Timer
    Do While Timer - t < Time / 1000
        DoEvents
    Loop
End Sub

Private Sub Worksheet_SelectionChange(ByVal Target As Range)
    If Not Intersect(Target, Range("Formula1")) Is Nothing Then
        Range("FormulaCheck") = ""
        Range("Formula1").Cells("0,5") = "√"
        Formula = "Formula1"
    End If
    If Not Intersect(Target, Range("Formula2")) Is Nothing Then
        Range("FormulaCheck") = ""
        Range("Formula2").Cells("0,5") = "√"
        Formula = "Formula2"
    End If
    If Not Intersect(Target, Range("Formula3")) Is Nothing Then
        Range("FormulaCheck") = ""
        Range("Formula3").Cells("0,5") = "√"
        Formula = "Formula3"
    End If
    If Formula = "" Then Formula = "Formula1"
    a = Range(Formula).Cells(2, 1)
    b = Range(Formula).Cells(2, 2)
    c = Range(Formula).Cells(2, 3)
    d = Range(Formula).Cells(2, 4)
End Sub
